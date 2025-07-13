const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const prisma = require("../lib/prisma");

// const users = [];

const signUp = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    // Simple validation
    // if (!firstname || !lastname || !email || !password) {
    //   return res.status(400).json({ message: "All fields are required." });
    // }
    //    const existingUser =users.find(user=>user.email === email);
    // if(existingUser)
    // const newuser = {
    //   id: Math.floor(Math.random() * 100),
    //   firstname: firstname,
    //   lastname: lastname,
    //   email: email,
    //   password: password,
    // };

    // users.push(newuser);

    // TODO: Check if user exists, hash password, store in DB

    //check if user exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        firstname: firstname,
        lastname: lastname,
        email,
        password: hashedPassword,
      },
    });

    // Create JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(201).json({
      message: "User created successfully",
      user: { id: user.id, email: user.email },
      token,
    });
  } catch (error) {
    console.error("Signup error:", err);
    return res
      .status(500)
      .json({ message: "Signup failed", error: err.message });
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Check if user exists
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // 2. Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 3. Create JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // true in production (HTTPS)
      sameSite: "Lax",
      maxAge: 3600000,
    });

    return res.json({ message: "Login successful" });
  } catch (err) {
    console.error("Signin error:", err);
    return res
      .status(500)
      .json({ message: "Signin failed", error: err.message });
  }
};

module.exports = { signUp, signIn };
