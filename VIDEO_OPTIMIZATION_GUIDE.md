# Video Optimization Guide for Web Performance

## Recommended Video Formats

### Primary Format: MP4 (H.264 Codec)

- **File extension**: .mp4
- **Codec**: H.264 (AVC)
- **Browser support**: Universal (Chrome, Firefox, Safari, Edge, Opera)
- **Compatibility**: Best overall compatibility

### Secondary Format: WebM (VP9 Codec)

- **File extension**: .webm
- **Codec**: VP9
- **Browser support**: Chrome, Firefox, Opera, Edge
- **Advantages**: Better compression, smaller file size
- **Note**: Not supported in Safari

## Optimization Recommendations

### 1. Video Encoding Settings

- **Resolution**: 1920x1080 (Full HD) or 1280x720 (HD) max
- **Frame rate**: 24-30 FPS (avoid 60 FPS for background videos)
- **Bitrate**:
  - 1080p: 2-5 Mbps
  - 720p: 1-3 Mbps
- **Codec profile**: Baseline or Main profile for better compatibility

### 2. File Size Optimization

- **Target size**: Under 10MB for fastest loading
- **Compression**: Use tools like HandBrake or FFmpeg
- **Duration**: 10-15 seconds max for background loops

### 3. Encoding Commands (FFmpeg)

#### For MP4 (H.264):

```bash
ffmpeg -i input.mp4 -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k -movflags +faststart output.mp4
```

#### For WebM (VP9):

```bash
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus output.webm
```

### 4. Compression Tips

- Use CRF (Constant Rate Factor) of 23-28 for good quality/size balance
- Enable "faststart" flag for MP4 to allow streaming
- Remove audio track for background videos (muted anyway)

## Implementation Best Practices

### 1. File Placement

- Place video files in `/assets/` directory
- Use descriptive names (e.g., `hero-bg.mp4`, `hero-bg.webm`)

### 2. Fallback Strategy

- Always provide both MP4 and WebM sources
- Include a static fallback background image in CSS
- Implement proper error handling in JavaScript

### 3. Loading Optimization

- Use `preload="auto"` for important background videos
- Consider lazy loading for videos below the fold
- Implement loading spinners or placeholders for better UX

### 4. Mobile Considerations

- Serve smaller video files to mobile devices
- Use media queries to disable videos on slow connections
- Always include `playsinline` attribute for iOS Safari

## Performance Monitoring

### 1. Tools for Testing

- **Chrome DevTools**: Network tab to check loading times
- **Lighthouse**: Performance audits
- **WebPageTest**: Detailed performance analysis

### 2. Key Metrics

- **First Contentful Paint (FCP)**: Should not be delayed by video
- **Largest Contentful Paint (LCP)**: Video should not be LCP
- **Total Blocking Time (TBT)**: Video should not block main thread

### 3. Optimization Checklist

- [ ] Video file size under 10MB
- [ ] Both MP4 and WebM formats provided
- [ ] Proper compression settings applied
- [ ] Fallback background image in CSS
- [ ] JavaScript error handling implemented
- [ ] Mobile performance tested
- [ ] Cross-browser compatibility verified

## Troubleshooting Common Issues

### 1. Video Not Playing

- Check file paths and extensions
- Verify browser support for codecs
- Ensure proper MIME types on server

### 2. Poor Performance

- Reduce video resolution or bitrate
- Optimize encoding settings
- Consider using a static image for mobile

### 3. Layout Shifts

- Set explicit dimensions on video element
- Use `object-fit: cover` to maintain aspect ratio
- Preload video with `preload="auto"`

By following these guidelines, you can ensure your background video provides an engaging user experience while maintaining optimal website performance.
