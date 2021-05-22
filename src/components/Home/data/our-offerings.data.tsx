// ICONS
import {
  IdentificationIcon,
  ClipboardListIcon,
  ChatAlt2Icon,
  ChatAltIcon,
} from '@heroicons/react/solid'

interface ourOfferingsDatatype {
  label: string
  points: string[]
  ctaText: string
  icon: JSX.Element
}

export const ourOfferingsData: ourOfferingsDatatype[] = [
  {
    label: 'Get Your Profile Examined',
    points: [
      'Get an All India Rank based on your profile',
      'See where your profile stands among thousands of students',
      'Get evaluated using genuine parameters',
      'Hit the mark by getting scores for your profile',
    ],
    ctaText: 'Evaluate Your Profile',
    icon: <IdentificationIcon className="inline-block h-6 mr-2" />,
  },
  {
    label: 'Take An Aptitude Test',
    points: [
      'Know your strong and weak topics',
      'Analyse appearing for which exams will be the best for you',
      'Wholesome test designed by industry experts',
      'Get a clear idea of all the important topics for MBA Entrance Exams',
    ],
    ctaText: 'Take Test',
    icon: <ClipboardListIcon className="inline-block h-6 mr-2" />,
  },
  {
    label:
      'Let Us Uncomplicate It For You - Tell Us Your Doubts And We Will Get Them Cleared',
    points: [
      'Chat with our experts and ask all your queries',
      'Get the best answers after ample of research',
      'Easy access to expert advice',
      'Hassle and cost-free chatting experience',
    ],
    ctaText: 'Chat With Us',
    icon: <ChatAlt2Icon className="inline-block h-6 mr-2" />,
  },
  {
    label:
      "Know The Truth - Talk To Alumni Of The College Of Your Preference - Know What's Going On Inside",
    points: [
      'Get in touch with the alumni of colleges',
      'Get to know the ground reality',
      'Ask your queries to those who are actually studying in the B-school',
    ],
    ctaText: 'Get In Touch',
    icon: <ChatAltIcon className="inline-block h-6 mr-2" />,
  },
]
