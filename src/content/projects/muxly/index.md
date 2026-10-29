---
title: Muxly
description: A lightweight, highly customizable CLI for managing tmux sessions with ease.
order: 0
featured: true
logo: true
thumbnail: thumbnail.png
image: cover.png
githubUrl: https://github.com/Pairadux/Muxly
---

## Overview

Muxly is a highly configurable Tmux Session Manager based on ThePrimeagen's tmux-sessionizer script. It provides an intuitive interface for creating, managing, and switching between tmux sessions with pre-defined or on-the-fly layouts and intelligent directory scanning.

## Technologies

- Go
- Cobra
- Viper
- BubbleTea
- Tmux
- Fzf

## Key Features

- User Friendly
- Highly Customizable
- Fast (~0.01s for primary usage)
- Asynchronous Directory Discovery
- Comprehensive Documentation

## Challenges

After reaching a point in development where I was finally ready to share it, I realized that I had to completely re-brand my project to get it put onto most package managers since "tmux-sessionizer" was already taken. This wasn't inherently a huge issue, but it was pretty annoying.

Another key challenge was finding a good, performant package for directory walking. I eventually settled on `github.com/charlievieth/fastwalk`, which as it's name implies, is very fast, and had every feature that I needed to make Muxly work exactly how I want it to.

## Outcome

For months, if not slightly over a year, I have been using Muxly for my personal development workflow, and it has evolved just as my workflow has, but with Muxly's configurability, I have been able to constantly adapt it to meet my needs, and the very few edge cases I have found are quickly patched and made available to others. I am extremely proud of and excited about this project, and I have already spoke to a few other developers who have begun implementing Muxly into their workflow and have been enjoying its "stellar documentation" and "ease-of-use." Although this project is currently still in its infancy, having not even hit v1.0.0 yet, I am still proud of it, and can't wait to actively share it with more people!
