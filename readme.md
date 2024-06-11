# Electron lingering shadow repro

This repository includes a repro for a problem with Electron (or possibly
Chromium itself) where when a transparent window is used with semi-transparent
elements on the page, shadows and ghosts might linger even after the elements
have been changed or removed.

![](repro.png)

It is a cool effect for simulating a crappy OLED, but in most cases undesirable.

The only fix I was able to come up with is a full window refresh.

Run using `bun install` to install Electron followed by `bunx electron .`.
