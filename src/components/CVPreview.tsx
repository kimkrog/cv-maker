import React from 'react';
import { CVData, Skill, Language } from '@/types/cv';

interface CVPreviewProps {
  data: CVData;
}

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="mb-2">
      <div className="text-xs font-medium text-gray-800 mb-1">{skill.name}</div>
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((level) => (
          <div
            key={level}
            className={`w-2 h-2 rounded-full ${
              level <= skill.level ? 'bg-blue-900' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const LanguageBar: React.FC<{ language: Language }> = ({ language }) => {
  return (
    <div className="mb-2">
      <div className="text-xs font-medium text-gray-800 mb-1">{language.name}</div>
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((level) => (
          <div
            key={level}
            className={`w-2 h-2 rounded-full ${
              level <= language.level ? 'bg-blue-900' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export const CVPreview: React.FC<CVPreviewProps> = ({ data }) => {
  const { personalInfo, workExperience, education, publications, skills, languages, interests } = data;

  const technicalSkills = skills.filter(skill => skill.category === 'Technical');
  const tools = skills.filter(skill => skill.category === 'Tools');

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* A4 Aspect Ratio Container (210:297 ≈ 1:1.414) */}
      <div
        id="cv-print-content"
        className="relative w-full bg-white shadow-lg overflow-hidden"
        style={{ aspectRatio: '210/297' }}
      >
        {/* Scrollable content within A4 bounds */}
        <div className="absolute inset-0 overflow-auto">
          <div className="min-h-full bg-white" style={{ fontSize: '0.7rem' }}>
      {/* Header Section */}
      <div className="bg-white px-4 py-3 border-b border-gray-200">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-blue-900 mb-1">{personalInfo.name}</h1>
            <h2 className="text-sm text-gray-600 mb-2">{personalInfo.jobTitle}</h2>
          </div>
          <div className="text-right text-xs text-gray-600 space-y-1">
            <div className="flex items-center justify-start">
              <span className="mr-2">📞</span>
              <span>{personalInfo.phone}</span>
            </div>
            {personalInfo.email && (
            <div className="flex items-center justify-start">
              <span className="mr-2">✉️</span>
              <span>{personalInfo.email}</span>
            </div>
            )}
            {personalInfo.linkedin && (
              <div className="flex items-center justify-start">
                <span className="mr-2">💼</span>
                <span>{personalInfo.linkedin}</span>
              </div>
            )}
            {personalInfo.location && (
            <div className="flex items-center justify-start">
                <span className="mr-2">📍</span>
                <span>{personalInfo.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Profile Photo and Summary section */}
      <div className="bg-white px-4 py-3 border-b border-gray-200">
        <div className="flex justify-between items-start">
          <div className="flex">
            <div className="w-16 h-16 rounded-full bg-gray-300 mr-3 flex-shrink-0 overflow-hidden">
              {personalInfo.image ? (
                <img
                  src={personalInfo.image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-xs">Photo</span>
                </div>
              )}
            </div>
            <div className="flex-1">
              <p className="text-xxs text-gray-700 leading-relaxed">{personalInfo.summary}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Left Column */}
        <div className="w-2/3 px-4 py-3">
          {/* Work Experience */}
          <section className="mb-4">
            <div className="border-l-4 border-blue-900 pl-2 mb-3">
              <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider">Work Experience</h3>
            </div>

            {workExperience.map((job) => (
              <div key={job.id} className="mb-3">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-gray-800 grow text-xs">{job.title}</h4>
                  {job.company && (
                    <>
                      <span className="text-xxs text-gray-600">{job.company}</span>
                      <span className="text-xxs text-gray-600 px-2">|</span>
                    </>
                  )}
                  <span className="text-xxs text-gray-600">{job.period}</span>
                </div>

                <div className="text-xxs text-gray-700 mb-2">
                  <p className="whitespace-pre-line">{job.description}</p>
                </div>

                {job.responsibilities.length > 0 && (
                  <ul className="list-disc list-inside text-xxs text-gray-700 mb-1">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                )}

                {job.websites && job.websites.length > 0 && (
                  <div className="flex space-x-2 text-xxs text-gray-600">
                    {job.websites.map((website, index) => (
                      <span key={index}>🌐 {website}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </section>

          {/* Education & Publications */}
          <section className="mb-4">
            <div className="border-l-4 border-blue-900 pl-2 mb-3">
              <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider">Education & Publications</h3>
            </div>

            {education.map((edu) => (
              <div key={edu.id} className="mb-2">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-gray-800 grow text-xxs">{edu.degree}</h4>
                  {edu.institution && (
                    <>
                      <span className="text-xxs text-gray-600">{edu.institution}</span>
                      <span className="text-xxs text-gray-600 px-2">|</span>
                    </>
                  )}
                  <span className="text-xxs text-gray-600">{edu.period}</span>
                </div>
                <p className="text-xxs text-gray-700">{edu.description}</p>
              </div>
            ))}

            {publications.map((pub) => (
              <div key={pub.id} className="mb-2">
                <div className="flex justify-between items-start gap-2">
                  <div className="flex-1">
                    <p className="text-xxs text-gray-800 font-medium">Publication: &quot;{pub.title}&quot;</p>
                    <p className="text-xxs text-gray-600">{pub.institution}</p>
                  </div>
                  <span className="text-xxs text-gray-600">{pub.year}</span>
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* Right Column */}
        <div className="w-1/3 bg-gray-50 px-3 py-3">
          {/* Skills */}
          <section className="mb-4">
            <div className="border-l-4 border-blue-900 pl-2 mb-3">
              <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider">Skills</h3>
            </div>

            <div className="mb-3">
              <h4 className="font-semibold text-gray-800 mb-2 text-xs">Technical</h4>
              {technicalSkills.map((skill) => (
                <SkillBar key={skill.id} skill={skill} />
              ))}
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2 text-xs">Tools</h4>
              {tools.map((skill) => (
                <SkillBar key={skill.id} skill={skill} />
              ))}
            </div>
          </section>

          {/* Languages */}
          <section className="mb-4">
            <div className="border-l-4 border-blue-900 pl-2 mb-3">
              <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider">Languages</h3>
            </div>

            {languages.map((language) => (
              <LanguageBar key={language.id} language={language} />
            ))}
          </section>

          {/* Interests */}
          <section>
            <div className="border-l-4 border-blue-900 pl-2 mb-3">
              <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider">Interests</h3>
            </div>

            <div className="space-y-1">
              {interests.map((interest, index) => (
                <div key={index} className="text-xs text-gray-700">{interest}</div>
              ))}
            </div>
          </section>
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};
