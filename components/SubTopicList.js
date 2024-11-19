import React from 'react';
import ProblemsList from './ProblemList';
import Accordian from './Accordian';

const SubTopicsList = ({ subTopics, onSelectSubtopic, problems }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Subtopics</h2>
      <ul className="space-y-2">
        {subTopics.map((subTopic) => (
          <Accordian
            key={subTopic._id}
            title={subTopic.title}
            onClick={() => onSelectSubtopic(subTopic._id)}
          >
            {problems[subTopic._id] && <ProblemsList problems={problems[subTopic._id]} />}
          </Accordian>
        ))}
      </ul>
    </div>
  );
};

export default SubTopicsList;
