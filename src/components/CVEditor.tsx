import React from 'react';
import { CVData, WorkExperience, EducationItem, Publication, Skill, Language } from '@/types/cv';

interface CVEditorProps {
  data: CVData;
  onChange: (data: CVData) => void;
}

export const CVEditor: React.FC<CVEditorProps> = ({ data, onChange }) => {

  const updatePersonalInfo = (field: string, value: string) => {
    onChange({
      ...data,
      personalInfo: { ...data.personalInfo, [field]: value }
    });
  };

  const addWorkExperience = () => {
    const newJob: WorkExperience = {
      id: Date.now().toString(),
      title: '',
      company: '',
      period: '',
      description: '',
      responsibilities: [],
      websites: []
    };
    onChange({
      ...data,
      workExperience: [...data.workExperience, newJob]
    });
  };

  const updateWorkExperience = (id: string, field: string, value: string | string[]) => {
    onChange({
      ...data,
      workExperience: data.workExperience.map(job =>
        job.id === id ? { ...job, [field]: value } : job
      )
    });
  };

  const removeWorkExperience = (id: string) => {
    onChange({
      ...data,
      workExperience: data.workExperience.filter(job => job.id !== id)
    });
  };

  const addEducation = () => {
    const newEducation: EducationItem = {
      id: Date.now().toString(),
      degree: '',
      institution: '',
      period: '',
      description: ''
    };
    onChange({
      ...data,
      education: [...data.education, newEducation]
    });
  };

  const updateEducation = (id: string, field: string, value: string) => {
    onChange({
      ...data,
      education: data.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    });
  };

  const removeEducation = (id: string) => {
    onChange({
      ...data,
      education: data.education.filter(edu => edu.id !== id)
    });
  };

  const addPublication = () => {
    const newPublication: Publication = {
      id: Date.now().toString(),
      title: '',
      institution: '',
      year: ''
    };
    onChange({
      ...data,
      publications: [...data.publications, newPublication]
    });
  };

  const updatePublication = (id: string, field: string, value: string) => {
    onChange({
      ...data,
      publications: data.publications.map(pub =>
        pub.id === id ? { ...pub, [field]: value } : pub
      )
    });
  };

  const removePublication = (id: string) => {
    onChange({
      ...data,
      publications: data.publications.filter(pub => pub.id !== id)
    });
  };

  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: '',
      level: 3,
      category: 'Technical'
    };
    onChange({
      ...data,
      skills: [...data.skills, newSkill]
    });
  };

  const updateSkill = (id: string, field: string, value: string | number) => {
    onChange({
      ...data,
      skills: data.skills.map(skill =>
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    });
  };

  const removeSkill = (id: string) => {
    onChange({
      ...data,
      skills: data.skills.filter(skill => skill.id !== id)
    });
  };

  const addLanguage = () => {
    const newLanguage: Language = {
      id: Date.now().toString(),
      name: '',
      level: 3
    };
    onChange({
      ...data,
      languages: [...data.languages, newLanguage]
    });
  };

  const updateLanguage = (id: string, field: string, value: string | number) => {
    onChange({
      ...data,
      languages: data.languages.map(lang =>
        lang.id === id ? { ...lang, [field]: value } : lang
      )
    });
  };

  const removeLanguage = (id: string) => {
    onChange({
      ...data,
      languages: data.languages.filter(lang => lang.id !== id)
    });
  };

  const updateInterests = (interests: string[]) => {
    onChange({ ...data, interests });
  };

  const addInterest = () => {
    onChange({ ...data, interests: [...data.interests, ''] });
  };

  const updateInterest = (index: number, value: string) => {
    const newInterests = [...data.interests];
    newInterests[index] = value;
    updateInterests(newInterests);
  };

  const removeInterest = (index: number) => {
    updateInterests(data.interests.filter((_, i) => i !== index));
  };

  const parseResponsibilities = (text: string): string[] => {
    return text.split('\n').filter(line => line.trim() !== '');
  };

  const parseWebsites = (text: string): string[] => {
    return text.split('\n').filter(line => line.trim() !== '');
  };

  return (
    <div className="space-y-4 p-4 bg-gray-50 max-h-screen overflow-y-auto">
      {/* Personal Information */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold mb-4 text-blue-900">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={data.personalInfo.name}
              onChange={(e) => updatePersonalInfo('name', e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Job Title</label>
            <input
              type="text"
              value={data.personalInfo.jobTitle}
              onChange={(e) => updatePersonalInfo('jobTitle', e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={data.personalInfo.email}
              onChange={(e) => updatePersonalInfo('email', e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="text"
              value={data.personalInfo.phone}
              onChange={(e) => updatePersonalInfo('phone', e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              value={data.personalInfo.location}
              onChange={(e) => updatePersonalInfo('location', e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">LinkedIn</label>
            <input
              type="text"
              value={data.personalInfo.linkedin || ''}
              onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Profile Image URL</label>
            <input
              type="text"
              value={data.personalInfo.image || ''}
              onChange={(e) => updatePersonalInfo('image', e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="https://example.com/image.jpg"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Summary</label>
          <textarea
            value={data.personalInfo.summary}
            onChange={(e) => updatePersonalInfo('summary', e.target.value)}
            rows={4}
            className="w-full p-2 border rounded-md"
          />
        </div>
      </section>

      {/* Work Experience */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-blue-900">Work Experience</h2>
          <button
            onClick={addWorkExperience}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
          >
            Add Job
          </button>
        </div>
        {data.workExperience.map((job, index) => (
          <div key={job.id} className="border p-4 rounded-md mb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Job {index + 1}</h3>
              <button
                onClick={() => removeWorkExperience(job.id)}
                className="text-red-600 hover:text-red-800 cursor-pointer"
              >
                Remove
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Job Title</label>
                <input
                  type="text"
                  value={job.title}
                  onChange={(e) => updateWorkExperience(job.id, 'title', e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Company</label>
                <input
                  type="text"
                  value={job.company}
                  onChange={(e) => updateWorkExperience(job.id, 'company', e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Period</label>
                <input
                  type="text"
                  value={job.period}
                  onChange={(e) => updateWorkExperience(job.id, 'period', e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="e.g., 2020 - 2023"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                value={job.description}
                onChange={(e) => updateWorkExperience(job.id, 'description', e.target.value)}
                rows={3}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Responsibilities (one per line)</label>
              <textarea
                value={job.responsibilities.join('\n')}
                onChange={(e) => updateWorkExperience(job.id, 'responsibilities', parseResponsibilities(e.target.value))}
                rows={3}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Websites (one per line)</label>
              <textarea
                value={job.websites?.join('\n') || ''}
                onChange={(e) => updateWorkExperience(job.id, 'websites', parseWebsites(e.target.value))}
                rows={2}
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-blue-900">Education</h2>
          <button
            onClick={addEducation}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
          >
            Add Education
          </button>
        </div>
        {data.education.map((edu, index) => (
          <div key={edu.id} className="border p-4 rounded-md mb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Education {index + 1}</h3>
              <button
                onClick={() => removeEducation(edu.id)}
                className="text-red-600 hover:text-red-800 cursor-pointer"
              >
                Remove
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Degree</label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Institution</label>
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Period</label>
                <input
                  type="text"
                  value={edu.period}
                  onChange={(e) => updateEducation(edu.id, 'period', e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  value={edu.description}
                  onChange={(e) => updateEducation(edu.id, 'description', e.target.value)}
                  rows={3}
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Publications */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-blue-900">Publications</h2>
          <button
            onClick={addPublication}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
          >
            Add Publication
          </button>
        </div>
        {data.publications.map((pub, index) => (
          <div key={pub.id} className="border p-4 rounded-md mb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Publication {index + 1}</h3>
              <button
                onClick={() => removePublication(pub.id)}
                className="text-red-600 hover:text-red-800 cursor-pointer"
              >
                Remove
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  value={pub.title}
                  onChange={(e) => updatePublication(pub.id, 'title', e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Institution</label>
                <input
                  type="text"
                  value={pub.institution}
                  onChange={(e) => updatePublication(pub.id, 'institution', e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Year</label>
                <input
                  type="text"
                  value={pub.year}
                  onChange={(e) => updatePublication(pub.id, 'year', e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-blue-900">Skills</h2>
          <button
            onClick={addSkill}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
          >
            Add Skill
          </button>
        </div>
        {data.skills.map((skill, index) => (
          <div key={skill.id} className="border p-4 rounded-md mb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Skill {index + 1}</h3>
              <button
                onClick={() => removeSkill(skill.id)}
                className="text-red-600 hover:text-red-800 cursor-pointer"
              >
                Remove
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Skill Name</label>
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select
                  value={skill.category}
                  onChange={(e) => updateSkill(skill.id, 'category', e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="Technical">Technical</option>
                  <option value="Tools">Tools</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Level (1-5)</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={skill.level}
                  onChange={(e) => updateSkill(skill.id, 'level', parseInt(e.target.value))}
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Languages */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-blue-900">Languages</h2>
          <button
            onClick={addLanguage}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
          >
            Add Language
          </button>
        </div>
        {data.languages.map((language, index) => (
          <div key={language.id} className="border p-4 rounded-md mb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Language {index + 1}</h3>
              <button
                onClick={() => removeLanguage(language.id)}
                className="text-red-600 hover:text-red-800 cursor-pointer"
              >
                Remove
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Language</label>
                <input
                  type="text"
                  value={language.name}
                  onChange={(e) => updateLanguage(language.id, 'name', e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Level (1-5)</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={language.level}
                  onChange={(e) => updateLanguage(language.id, 'level', parseInt(e.target.value))}
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Interests */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-blue-900">Interests</h2>
          <button
            onClick={addInterest}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
          >
            Add Interest
          </button>
        </div>
        {data.interests.map((interest, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <input
              type="text"
              value={interest}
              onChange={(e) => updateInterest(index, e.target.value)}
              className="flex-1 p-2 border rounded-md"
              placeholder="Interest"
            />
            <button
              onClick={() => removeInterest(index)}
              className="text-red-600 hover:text-red-800 px-2 cursor-pointer"
            >
              Remove
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};
