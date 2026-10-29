---
title: JDexr
description: Johnny Decimal directory navigation tool.
order: 2
featured: true
thumbnail: thumbnail.webp
githubUrl: https://github.com/Pairadux/jdexr
---

## Overview

Jdexr is a CLI tool for navigating Johnny Decimal filesystems without having to remember exactly where everything lives. You annotate your directories once, and from there finding them is a keyword search away.

The init command walks your filesystem up to a configurable depth, prompting you to assign keywords to each directory as it goes. Directories can be skipped, and you can add as many keywords as you want. Each directory gets a metadata.jd file at its root, keeping the annotations co-located with the content itself. This means you can freely rename or reorganize your filesystem and your metadata travels with it. A master index is generated from these files and cached locally for fast lookups, and can be rebuilt at any time with a single subcommand.

From there, searching is straightforward; provide a keyword and Jdexr returns every matching directory. The results are designed to feed into tools like fzf, so you can fuzzy-search your filesystem and jump straight to where you need to be.

## Technologies

- Go
- Cobra
- Viper

## Key Features

- Keyword-based directory search
- Portable metadata
- Cached master index
- Configurable scan depth
- fzf-friendly output
