import { Project, SkillCategory, JourneyStep, HackathonStep } from '../types';

export const PERSONAL_INFO = {
  name: "Induchoodan A P",
  status: "First-Semester B.Tech Student",
  headline: "First-Semester B.Tech Student | Aspiring AI Engineer",
  careerGoal: "Aspiring AI Engineer",
  technicalLevel: "Beginner",
  bioHeadline: "Hi, I'm Induchoodan A P.",
  shortIntro:
    "I'm a first-semester B.Tech student exploring Python, web development, and Generative AI. I enjoy building projects, participating in hackathons and ideathons, and turning ideas into working solutions.",
  aboutText:
    "I'm currently beginning my journey in technology as a B.Tech first-semester student. My primary interests are Python, web development, and Generative AI. I am focused on strengthening my programming fundamentals while experimenting with projects and participating in hackathons and ideathons.\n\nMy long-term goal is to become an AI Engineer and build practical technology that solves meaningful problems.",
  currentlyLearning: [
    "Python",
    "Web Development",
    "Generative AI",
    "Problem Solving",
    "AI Tools",
    "Software Development Fundamentals",
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/induchoodan-a-p-9ab54b3b2/",
    github: "https://github.com/INDUCHOODAN-1907",
    email: "induchoodan882@gmail.com",
  },
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "voter-eligibility",
    title: "Voter Eligibility System",
    shortDescription:
      "A beginner-level Python project that determines whether a person is eligible to vote based on age.",
    technology: "Python",
    conceptFocus: ["Conditional Logic (if-else)", "User Input Processing", "Integer Validation", "Boundary Checks"],
    interactiveType: "voter",
    pythonCode: `# Voter Eligibility System in Python
def check_voting_eligibility():
    try:
        age_input = input("Enter your age: ")
        age = int(age_input)
        
        if age < 0 or age > 120:
            print("Invalid age entered. Please provide a realistic age.")
        elif age >= 18:
            print(f"At {age} years old, you are eligible to vote!")
        else:
            years_left = 18 - age
            print(f"At {age} years old, you are not eligible to vote yet.")
            print(f"You will be eligible in {years_left} year(s).")
    except ValueError:
        print("Please enter a valid numeric integer for age.")

if __name__ == "__main__":
    check_voting_eligibility()`,
  },
  {
    id: "calculator",
    title: "Calculator",
    shortDescription:
      "A basic calculator project demonstrating programming fundamentals, user input, arithmetic operations, and logical thinking.",
    technology: "Python",
    conceptFocus: ["Arithmetic Operations", "Function Definitions", "Input Sanitation", "Zero-Division Handling"],
    interactiveType: "calculator",
    pythonCode: `# Foundational Calculator in Python
def add(a, b): return a + b
def subtract(a, b): return a - b
def multiply(a, b): return a * b
def divide(a, b):
    if b == 0:
        return "Error: Cannot divide by zero"
    return a / b

def run_calculator(num1, operator, num2):
    if operator == "+":
        return add(num1, num2)
    elif operator == "-":
        return subtract(num1, num2)
    elif operator == "*":
        return multiply(num1, num2)
    elif operator == "/":
        return divide(num1, num2)
    else:
        return "Invalid operator selected."`,
  },
  {
    id: "atm-management",
    title: "ATM Management System",
    shortDescription:
      "A beginner-level project that simulates basic ATM operations and demonstrates programming logic and user interaction.",
    technology: "Python",
    conceptFocus: ["State Management", "Balance Checking", "Deposit Logic", "Withdrawal Validation"],
    interactiveType: "atm",
    pythonCode: `# ATM Management System Simulation in Python
class SimpleATM:
    def __init__(self, initial_balance=5000):
        self.balance = initial_balance

    def check_balance(self):
        return f"Current Balance: ₹{self.balance:.2f}"

    def deposit(self, amount):
        if amount <= 0:
            return "Deposit amount must be greater than zero."
        self.balance += amount
        return f"Deposited ₹{amount:.2f}. New Balance: ₹{self.balance:.2f}"

    def withdraw(self, amount):
        if amount <= 0:
            return "Withdrawal amount must be greater than zero."
        if amount > self.balance:
            return "Transaction declined: Insufficient funds."
        self.balance -= amount
        return f"Withdrew ₹{amount:.2f}. Remaining Balance: ₹{self.balance:.2f}"`,
  },
  {
    id: "student-grade",
    title: "Student Grade Calculator",
    shortDescription:
      "A project that calculates student grades based on marks and demonstrates conditional logic and basic programming concepts.",
    technology: "Python",
    conceptFocus: ["Grade Thresholds", "Percentage Averaging", "Multi-branch Conditions", "Performance Summary"],
    interactiveType: "grade",
    pythonCode: `# Student Grade Calculator in Python
def calculate_grade(marks):
    if marks < 0 or marks > 100:
        return "Invalid Marks", "Marks must be between 0 and 100"
    
    if marks >= 90:
        return "A+", "Outstanding Performance"
    elif marks >= 80:
        return "A", "Excellent Performance"
    elif marks >= 70:
        return "B", "Very Good Performance"
    elif marks >= 60:
        return "C", "Good / Satisfactory"
    elif marks >= 50:
        return "D", "Pass"
    else:
        return "F", "Needs Improvement"`,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    description: "Strengthening syntax, procedural thinking, and algorithms",
    skills: [
      { name: "Python", level: "Active Practice" },
    ],
  },
  {
    title: "Web Development",
    description: "Understanding markup, style architecture, and client logic",
    skills: [
      { name: "HTML", level: "Foundational" },
      { name: "CSS", level: "Foundational" },
      { name: "JavaScript", level: "Currently Exploring" },
    ],
  },
  {
    title: "Artificial Intelligence",
    description: "Exploring model capabilities, prompt structuring, and modern tooling",
    skills: [
      { name: "Generative AI", level: "Currently Exploring" },
      { name: "AI Tools", level: "Active Practice" },
      { name: "Prompt Engineering", level: "Currently Exploring" },
    ],
  },
  {
    title: "Fundamentals",
    description: "Building the core cognitive discipline behind software creation",
    skills: [
      { name: "Problem Solving", level: "Active Practice" },
      { name: "Logical Thinking", level: "Active Practice" },
      { name: "Programming Fundamentals", level: "Foundational" },
    ],
  },
];

export const HACKATHON_STEPS: HackathonStep[] = [
  {
    step: "01",
    title: "IDEA",
    description: "Brainstorming fresh concepts triggered by everyday friction, community needs, or technology trends.",
  },
  {
    step: "02",
    title: "PROBLEM UNDERSTANDING",
    description: "Digging deeper into root causes, user perspective, and defining explicit boundaries of what needs fixing.",
  },
  {
    step: "03",
    title: "RESEARCH",
    description: "Examining existing solutions, discovering open documentation, and identifying foundational techniques.",
  },
  {
    step: "04",
    title: "PROTOTYPING",
    description: "Sketching quick wireframes, defining data structures, and laying down the first working logic steps.",
  },
  {
    step: "05",
    title: "BUILDING",
    description: "Writing code, assembling functional components, testing edge cases, and collaborating under time constraints.",
  },
  {
    step: "06",
    title: "LEARNING",
    description: "Reflecting on what worked, absorbing mentor feedback, fixing shortcomings, and gearing up for the next build.",
  },
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    number: "01",
    title: "Programming Foundations",
    description: "Learning Python, strengthening logical thinking, mastering conditional branches, functions, and data structures.",
    isCurrent: true,
  },
  {
    number: "02",
    title: "Web Development",
    description: "Learning how websites work, modern web standards, semantic structure, and building responsive client interfaces.",
    isCurrent: true,
  },
  {
    number: "03",
    title: "Generative AI",
    description: "Exploring AI tools, prompt structuring, and understanding how foundational models power practical software.",
    isCurrent: true,
  },
  {
    number: "04",
    title: "Hackathons & Ideathons",
    description: "Applying what I learn to real-world problems and collaborative challenges alongside fellow builders.",
    isCurrent: false,
  },
  {
    number: "05",
    title: "Future Goal",
    description: "Developing deeper knowledge in Artificial Intelligence and becoming a dedicated AI Engineer.",
    isCurrent: false,
  },
];

export const CURRENT_EXPLORATION_AREAS = [
  {
    name: "Python",
    category: "Language",
    detail: "Object-oriented basics, input handling, and algorithmic exercises",
  },
  {
    name: "Web Development",
    category: "Frontend",
    detail: "Responsive interfaces, semantic HTML5, styling, and DOM interaction",
  },
  {
    name: "Generative AI",
    category: "AI",
    detail: "Understanding LLM fundamentals, multimodal concepts, and workflows",
  },
  {
    name: "Prompt Engineering",
    category: "AI",
    detail: "Context framing, few-shot prompting, and deterministic outputs",
  },
  {
    name: "AI-powered Applications",
    category: "Engineering",
    detail: "Studying how developers integrate intelligence into practical software",
  },
  {
    name: "Problem Solving",
    category: "Cognitive",
    detail: "Deconstructing ambiguous challenges into discrete algorithmic steps",
  },
  {
    name: "Hackathon Projects",
    category: "Collaboration",
    detail: "Participating in team ideation, sprint planning, and rapid builds",
  },
];
