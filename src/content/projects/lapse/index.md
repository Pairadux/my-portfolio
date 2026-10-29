---
title: Lapse
description: A cross-platform, true FSRS flashcard application.
order: 3
featured: true
thumbnail: thumbnail.png
image: cover.png
githubUrl: https://github.com/Pairadux/lapse
---

## Overview

A cross-platform flashcard application for mobile and desktop built around the FSRS spaced repetition algorithm. Designed local-first with Supabase cloud sync, Material 3 styling, and support for multiple card types including cloze and obfuscation. Architected for extensibility and performance from the ground up. Serving as project manager, responsible for UI design, database architecture, and maintaining code quality and consistency across the team.

## Technologies

- Flutter
- Dart
- Riverpod
- GoRouter
- SQLite (sqlflite)
- FSRS
- window_manager
- Supabase (PostgreSQL, Auth, Row Level Security, real-time sync)

## Key Features

- FSRS spaced repitition
- Local-first architecture
- Multiple card templates
- Cross-platform support
- Optional AI plugin

## Challenges

Leading a four-person team on a project with real technical depth meant investing heavily upfront in shared understanding. Getting everyone aligned on the architecture, requirements, and direction required structured meetings, collaborative brainstorming, and enough documentation that the whole team could contribute confidently rather than waiting for direction.

The capstone's academic requirements added meaningful overhead; detailed logging of AI tool usage, time tracking, and methodology documentation ran parallel to actual development work and required discipline to maintain without letting it slow momentum.

Managing uneven contribution across the team was an ongoing challenge. Keeping velocity stable while maintaining code quality and consistency meant doing more code review and guidance than anticipated, and making judgment calls about when to redirect work versus absorb it.

## Solution

Taking ownership of the project architecture early meant having clear answers when the team needed direction, which reduced back-and-forth and kept decisions from stalling. Establishing conventions upfront: commit style, file structure, and state management patterns with Riverpod gave the team guardrails that made inconsistency easier to catch in review.

The logging overhead became more manageable once treated as a parallel habit rather than a separate task. Keeping a running development log reduced the cognitive load of reconstructing decisions after the fact.

For team coordination, shifting from trying to distribute work evenly to distributing it by confidence and capability kept the project moving without sacrificing quality on critical components.

## Outcome

Currently two sprints in with a functional local-first application featuring core CRUD operations, SQLite integration, and the foundational Riverpod architecture in place. The FSRS study loop and card template system are actively in development.

The intended outcome is a production-ready, open-source alternative to Anki: a free, modern, cross-platform flashcard app deployable to web, Android, and desktop, with a polished study experience that holds up against existing tools without paywalls or platform lock-in.
