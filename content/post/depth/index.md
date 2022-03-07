---
title: First volumetric reconstruction
date: 2022-02-26T23:10:45.249Z
draft: false
featured: false
---

Among the recording performed during the first session with the Coull quartet, LiDAR  data was captured for each of the musicians performing alone. The aim of collecting this data is to create 3D animations of musicians to be shown in VR and AR. LiDAR (Light Detection and Ranging) determines distance at several points by measuring how long it takes laser light to reach an object and reflect back.

![camera used to capture volumetric video](intel.jpg)

The recordings were performed using two Intel RealSense LiDAR Camera L515 placed at the sides of the musician, playing alone. Each had a resolution of 640x480 for the depth frames and 1280x720 for the color data, both captured at 30fps.

![Musician performance captured with LIDAR camera](dapthmap.jpg)

The data from the two cameras has been cleaned up and combined by aliging the reference systems. Here is an example of the outcome obtained for one of the frames.

{{<video src="lidar.mp4">}}
