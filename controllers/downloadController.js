const { igdl } = require('ruhend-scraper');

const downloadInstagram = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ message: 'URL is required' });
  }

  try {
    let response = await igdl(url);
    let data = await response.data;

    console.log('Full Response from igdl:', response);

    // You said data is an array like:
    // [{ thumbnail: '...', url: '...' }]
    const result = data.map(item => ({
      thumbnail: item.thumbnail,
      videoUrl: item.url
    }));

    console.log('Mapped Result:', result);

    res.status(200).json({ mediaLinks: result });
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ message: 'Failed to fetch media', error });
  }
};

module.exports = { downloadInstagram };
