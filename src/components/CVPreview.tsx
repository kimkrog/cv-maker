import React from 'react';
import { CVData, Skill, Language } from '@/types/cv';

interface CVPreviewProps {
  data: CVData;
}

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="mb-3">
      <div className="text-sm font-medium text-gray-800 mb-1">{skill.name}</div>
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((level) => (
          <div
            key={level}
            className={`w-3 h-3 rounded-full ${
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
    <div className="mb-3">
      <div className="text-sm font-medium text-gray-800 mb-1">{language.name}</div>
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((level) => (
          <div
            key={level}
            className={`w-3 h-3 rounded-full ${
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
    <div className="max-w-4xl mx-auto bg-white shadow-lg">
      {/* Header Section */}
      <div className="bg-white px-8 py-6 border-b border-gray-200">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-blue-900 mb-2">{personalInfo.name}</h1>
            <h2 className="text-xl text-gray-600 mb-4">{personalInfo.jobTitle}</h2>
          </div>
          <div className="text-right text-sm text-gray-600 space-y-1">
            <div className="flex items-center justify-end">
              <span className="mr-2">📞</span>
              <span>{personalInfo.phone}</span>
            </div>
            {personalInfo.email && (
            <div className="flex items-center justify-end">
              <span className="mr-2">✉️</span>
              <span>{personalInfo.email}</span>
            </div>
            )}
            {personalInfo.linkedin && (
              <div className="flex items-center justify-end">
                <span className="mr-2">💼</span>
                <span>{personalInfo.linkedin}</span>
              </div>
            )}
            {personalInfo.location && (
            <div className="flex items-center justify-end">
                <span className="mr-2">📍</span>
                <span>{personalInfo.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Profile Photo and Summary section */}
      <div className="bg-white px-8 py-6 border-b border-gray-200">
        <div className="flex justify-between items-start">
          <div className="flex">
            <div className="w-24 h-24 rounded-full bg-gray-300 mr-6 flex-shrink-0 overflow-hidden">
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
              <p className="text-sm text-gray-700 leading-relaxed">{personalInfo.summary}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Left Column */}
        <div className="w-2/3 px-8 py-6">
          {/* Work Experience */}
          <section className="mb-8">
            <div className="border-l-4 border-blue-900 pl-4 mb-6">
              <h3 className="text-lg font-bold text-blue-900 uppercase tracking-wider">Work Experience</h3>
            </div>

            {workExperience.map((job) => (
              <div key={job.id} className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800 grow">{job.title}</h4>
                  {job.company && (
                    <>
                      <span className="text-xs text-gray-600">{job.company}</span>
                      <span className="text-xs text-gray-600 px-3">|</span>
                    </>
                  )}
                  <span className="text-xs text-gray-600">{job.period}</span>
                </div>

                <div className="text-sm text-gray-700 mb-3">
                  <p className="whitespace-pre-line">{job.description}</p>
                </div>

                {job.responsibilities.length > 0 && (
                  <ul className="list-disc list-inside text-sm text-gray-700 mb-2">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                )}

                {job.websites && job.websites.length > 0 && (
                  <div className="flex space-x-4 text-sm text-gray-600">
                    {job.websites.map((website, index) => (
                      <span key={index}>🌐 {website}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </section>

          {/* Education & Publications */}
          <section className="mb-8">
            <div className="border-l-4 border-blue-900 pl-4 mb-6">
              <h3 className="text-lg font-bold text-blue-900 uppercase tracking-wider">Education & Publications</h3>
            </div>

            {education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-gray-800 grow">{edu.degree}</h4>
                  {edu.institution && (
                    <>
                      <span className="text-xs text-gray-600">{edu.institution}</span>
                      <span className="text-xs text-gray-600 px-3">|</span>
                    </>
                  )}
                  <span className="text-xs text-gray-600">{edu.period}</span>
                </div>
                <p className="text-sm text-gray-700">{edu.description}</p>
              </div>
            ))}

            {publications.map((pub) => (
              <div key={pub.id} className="mb-3">
                <div className="flex justify-between items-start gap-5">
                  <div className="flex-1">
                    <p className="text-sm text-gray-800 font-medium">Publication: `&quot;`{pub.title}`&quot;`</p>
                    <p className="text-sm text-gray-600">{pub.institution}</p>
                  </div>
                  <span className="text-xs text-gray-600">{pub.year}</span>
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* Right Column */}
        <div className="w-1/3 bg-gray-50 px-6 py-6">
          {/* Skills */}
          <section className="mb-8">
            <div className="border-l-4 border-blue-900 pl-4 mb-6">
              <h3 className="text-lg font-bold text-blue-900 uppercase tracking-wider">Skills</h3>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-4">Technical</h4>
              {technicalSkills.map((skill) => (
                <SkillBar key={skill.id} skill={skill} />
              ))}
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Tools</h4>
              {tools.map((skill) => (
                <SkillBar key={skill.id} skill={skill} />
              ))}
            </div>
          </section>

          {/* Languages */}
          <section className="mb-8">
            <div className="border-l-4 border-blue-900 pl-4 mb-6">
              <h3 className="text-lg font-bold text-blue-900 uppercase tracking-wider">Languages</h3>
            </div>

            {languages.map((language) => (
              <LanguageBar key={language.id} language={language} />
            ))}
          </section>

          {/* Interests */}
          <section>
            <div className="border-l-4 border-blue-900 pl-4 mb-6">
              <h3 className="text-lg font-bold text-blue-900 uppercase tracking-wider">Interests</h3>
            </div>

            <div className="space-y-2">
              {interests.map((interest, index) => (
                <div key={index} className="text-sm text-gray-700">{interest}</div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
