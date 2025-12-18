"use client"
import React from 'react'
import BlurFade from '../magicui/blur-fade'
import { DATA } from '@/data/resume'
import { Badge } from '../ui/badge';
const BLUR_FADE_DELAY = 0.04;

type SkillType = typeof DATA.skills extends Record<infer K, any> ? K : never;


export default function Skills() {

  const [currentSkillType, setCurrentSkillType] = React.useState<SkillType>("relevant");

  const skills = DATA.skills[currentSkillType];

  return (
    <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex space-x-2 mb-2">
            {Object.keys(DATA.skills).map((skillType) => (
              <button
                key={skillType}
                onClick={() => setCurrentSkillType(skillType as SkillType)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  currentSkillType === skillType
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {skillType.charAt(0).toUpperCase() + skillType.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-1">
            {skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
  )
}
