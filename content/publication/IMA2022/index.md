---
title: Assessing the feasibility of real-time analysis of timing and coordination between ensemble musicians
subtitle: ""
publication_types:
  - "1"
authors:
  - Tom Goodman
  - Nori Jacoby
  - Min Susan Li
  - Maciek Tomczak
  - Maria Witek
  - Ryan Stables
  - Alan Wing
  - Massimiliano Di Luca
  - Mark Elliott

author_notes: []
doi: ""
publication: 1st IMA Maths in Music Conference
publication_short: Maths in Music Conference
abstract: "When musicians play in ensemble, they continuously adapt to each other to ensure that the group keeps time together. The musicians’ timing correction can be captured by a linear phase correction model, where each player has a correction gain to other players - representing how much they adjust to one another. In addition, such models incorporate two noise components - timekeeper variance and motor variance. The Augmented Reality Musical Ensemble (ARME) project is building a system for solo musicians to practise with a virtual ensemble of AI players that will interact with the individual, and keep timing in a natural manner. To achieve this, onset detection, parameter estimation, motion capture, AI, and augmented reality techniques all need to run in real time. The work presented in this Paper analyses the feasibility of estimating the parameters of the linear phase correction model at the required speeds. The model parameters can be estimated using the work of Jacoby et al., who used the Cramér–Rao Lower Bound (CRLB) to identify the need for an additional restriction (that the timekeeper variance is strictly larger than the motor variance). This is used alongside generalised least squares estimation to extract the three model parameters for any time-series of note onsets from players.
Simulations of real-time estimation performance show that the mean error remains negligible even with little information (e.g., less than ~20 note onsets), but the variance increases - potentially rendering a real-time system unusable. We provide insights on the effect of initial correction parameters on estimation performance, suggest a number of solutions to potentially facilitate real-time estimation, and provide comparisons with similar methods. Through these, we demonstrate the feasibility of real-time estimation required to build the interactive agents for virtual musician ensembles - such as the one the ARME project is working to build."
draft: false
featured: false
tags: []
categories:
  - perception
  - model
  - Synchronisation
  - Music ensemble
  - Quartet simulation
  - Linear Phase Correction Model
  - Feedback correction gain
  - Timing variability
image:
  filename:
  focal_point: Smart
  preview_only: false
date: 2022-07-16T16:07:14.779Z

---
