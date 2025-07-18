import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../App.css';

const BlogPosts = () => {
  const posts = [
    {
      title: 'Building an AI-Powered Job Application Tracker with Gmail, Google Sheets, n8n, and Gemma',
      date: 'July 2025',
      image: "/images/blogs/jobTracker.png",
      summary: 'How I automated my entire job application workflow for free using local LLMs and open tools.',
      content: `
  <h4>Introduction</h4>
  <p>In today’s competitive job market, manually tracking job applications can be exhausting and inefficient. After applying to dozens of roles across different platforms, I found myself constantly losing track of statuses, missing follow-ups, and digging through emails for interview details. That’s when I realized: I could automate it all. This blog details how I built an AI-powered job tracker using only free tools—Gmail, Google Sheets, n8n, and a local LLM (Gemma)—to streamline my job search like a pro.</p>

  <h4>Overview of Tools Used</h4>
  <ul>
    <li><strong>Gmail:</strong> Source of job-related emails.</li>
    <li><strong>n8n (Docker):</strong> Visual automation to control the workflow.</li>
    <li><strong>Gemma 3B (via LM Studio):</strong> A local LLM that parses email content into structured data.</li>
    <li><strong>Google Sheets:</strong> Dashboard to track all parsed applications.</li>
    <li><strong>Google Cloud Console:</strong> Provides API access for Gmail and Sheets.</li>
  </ul>

  <h4>Step-by-Step Setup Guide</h4>
  <h5>Step 1: Google Sheet Setup</h5>
  <p>Create a sheet named <em>Job Application Tracker</em> with headers like Job Title, Company, Date Applied, Location, Status, etc. This will act as your application dashboard.</p>

  <h5>Step 2: Gmail API Configuration</h5>
  <p>Enable Gmail and Sheets APIs in Google Cloud Console, create OAuth credentials, and connect Gmail and Sheets to n8n.</p>

  <h5>Step 3: Run n8n in Docker</h5>
  <pre><code>docker run -it --rm \\
  -p 5678:5678 \\
  -v ~/.n8n:/home/node/.n8n \\
  -e N8N_HOST=localhost \\
  -e N8N_PORT=5678 \\
  n8nio/n8n</code></pre>

  <h5>Step 4: Build the Workflow</h5>
  <ol>
    <li><strong>Trigger:</strong> Set a daily schedule (midnight).</li>
    <li><strong>Gmail Node:</strong> Filter with: <code>newer_than:1d</code> and subject includes keywords like “application”, “interview”, etc.</li>
    <li><strong>Function Node:</strong> Extract email body, subject, and snippet.</li>
    <li><strong>HTTP Node:</strong> Send email body to Gemma via LM Studio.</li>
    <li><strong>Function Node (Parse JSON):</strong> Extract structured fields from Gemma's response.</li>
    <li><strong>Sheets Node:</strong> Append data to your Google Sheet.</li>
  </ol>

  <h5>Gemma Prompt (used via LM Studio)</h5>
  <pre><code>{
  "model": "google/gemma-3-4b",
  "messages": [
    {
      "role": "system",
      "content": "You are a helpful assistant that extracts job application details from emails and returns the result in JSON format with keys like: job_title, company, date_applied, location, job_type, salary, remote_status, platform, resume_version, status."
    },
    {
      "role": "user",
      "content": "{{ $json.email_body }}"
    }
  ],
  "temperature": 0.2
}</code></pre>

  <h5>Example Parsing Function</h5>
  <pre><code>return items.map(item => {
  const raw = item.json.choices?.[0]?.message?.content || '';
  const match = raw.match(/\\\`\\\`\\\`json\\s*([\\s\\S]*?)\\s*\\\`\\\`\\\`/);
  let parsed = {};
  try {
    if (match) {
      parsed = JSON.parse(match[1]);
    }
  } catch (err) {
    parsed = { error: 'Failed to parse JSON', raw };
  }
  return { json: { ...parsed } };
});</code></pre>

  <h4>Conclusion</h4>
  <p>This system gave me a zero-maintenance, privacy-respecting way to track every job I applied to—automatically. Whether it’s an interview update or a rejection email, everything is logged, sorted, and waiting for me inside Google Sheets. The whole system runs daily, offline, and costs nothing. If you're a developer tired of job hunting chaos, you should absolutely try this setup. Drop a comment if you'd like the workflow JSON!</p>
`
    }
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleOpen = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <section id="blog" className="blog-section" data-aos="fade-up">
      <h2 className="text-center mb-4 blog-title">BLOG POSTS</h2>
      <div className="blog-list">
        {posts.map((post, idx) => (
          <div className="blog-card" key={idx}>
            <h3>{post.title}</h3>
            <p className="date">{post.date}</p>
            <p>{post.summary}</p>
            <button className="btn blog-btn p-0" onClick={() => handleOpen(post)}>Read more →</button>
          </div>
        ))}
      </div>
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedPost?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: '70vh', overflowY: 'auto', paddingRight: '8px' }}>
          {selectedPost?.image && (
            <img
              src={selectedPost.image}
              alt="Blog Header"
              className="img-fluid rounded mb-4"
              style={{ maxHeight: '300px', objectFit: 'cover', width: '100%' }}
            />
          )}
          <p className="text-muted">{selectedPost?.date}</p>
          <div dangerouslySetInnerHTML={{ __html: selectedPost?.content }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default BlogPosts;