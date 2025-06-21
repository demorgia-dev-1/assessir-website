import React from 'react';
import { motion } from 'framer-motion';
import './Evaluation.css';

const reports = [
  {
    title: 'Batch Result Report',
    description: 'Get precise insights into batch-level performance with detailed results for theory, practical, and viva exams.',
    features: 'NOS-wise score distribution, sectoral performance trends, improvement recommendations'
  },
  {
    title: 'Analytical Report (NOS-wise)',
    description: 'Drill deep into performance by National Occupational Standards (NOS).',
    features: 'Score distribution, sectoral trends, improvement recommendations'
  },
  {
    title: 'Monthly Summary Report',
    description: 'Stay on top of performance metrics with a monthly summary.',
    features: 'Month-wise trends, sector/job role-wise analysis'
  },
  {
    title: 'Student Log Report',
    description: 'Track candidate journey with logs, geo-location, and submitted evidence.',
    features: 'Progress monitoring, authenticity verification'
  },
  {
    title: 'Theory, Practical, and Viva Responses',
    description: 'Analyze performance in all assessment types: MCQ, hands-on, and oral.',
    features: 'Response breakdown, examiner feedback'
  },
  {
    title: 'Question Bank Report',
    description: 'Track question effectiveness and repetition in real assessments.',
    features: 'Reliability metrics, optimization insights'
  },
];

const Evaluation = () => {
  return (
    <section id="evaluation" className="evaluation-section">
      <h2>Evaluation System Fostering Insightful Assessment</h2>
      <p className="subtitle">
        Asses-Sir’s Evaluation System goes beyond traditional methods, offering a holistic view of skill performance.
      </p>
      <div className="report-grid">
        {reports.map((report, index) => (
          <motion.div
            className="report-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3>{report.title}</h3>
            <p>{report.description}</p>
            <p><strong>Key Features:</strong> {report.features}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Evaluation;
