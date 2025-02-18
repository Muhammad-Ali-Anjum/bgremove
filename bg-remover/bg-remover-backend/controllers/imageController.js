exports.removeBackground = async (req, res) => {
    const { userId } = req.user;
    const user = await User.findById(userId);
  
    // Check download limits
    if (user.subscription === 'free' && user.downloadCount >= 15) {
      return res.status(403).json({ message: 'Download limit exceeded' });
    }
  
    // Process the image (this is a mock)
    // Actual background removal logic should go here
  
    user.downloadCount += 1;
    await user.save();
    
    res.status(200).json({ message: 'Background removed', downloadCount: user.downloadCount });
  };
  