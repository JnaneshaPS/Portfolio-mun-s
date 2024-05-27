import connectDb from '../db';

export default async function handler(req, res) {
  try {
    const client = await connectDb();
    const db = client.db('mongodb'); 
    const projectsCollection = db.collection('projects');

    if (req.method === 'POST') {
      const project = req.body;
      const result = await projectsCollection.insertOne(project);
      res.status(201).json({ insertedId: result.insertedId });
    } else if (req.method === 'GET') {
      const projects = await projectsCollection.find({}).toArray();
      res.status(200).json(projects);
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error in API route:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


