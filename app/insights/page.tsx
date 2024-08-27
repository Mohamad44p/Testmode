import Article from "@/components/Blog/Article";
import BlogPostHero from "@/components/Blog/BlogPostHero";
import TopicResourceBar from "@/components/Blog/Fillter";
import TestOne from "@/components/Blog/TestOne";

const articles = [
  {
    image: "/images/Image1.webp",
    tag: "Thought Leadership",
    title:
      "Design with a Purpose: An Interview with Significo's Human-Centric Design Team",
    author: {
      name: "Adrienne Lindsey-Carr",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AL",
    },
    date: "Aug 22, 2024",
    readTime: "2 min",
    excerpt:
      "Dive into the world of human-centric design with Significo's innovative team. Learn how they're reshaping the future of user experiences.",
  },
  {
    image: "/images/Image2.png",
    tag: "Thought Leadership",
    title: "Personalizing Healthcare Technology",
    author: {
      name: "Dr. Jana Schmidt",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JS",
    },
    date: "Aug 5, 2024",
    readTime: "2 min",
    excerpt:
      "Explore the latest advancements in personalized healthcare technology and how it's revolutionizing patient care and treatment outcomes.",
  },
  {
    image: "/images/Image3.webp",
    tag: "Thought Leadership",
    title: "Insights into Digital Therapeutics from Significo's DTx Team",
    author: {
      name: "Matthew Preston",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MP",
    },
    date: "Aug 6, 2024",
    readTime: "2 min",
    excerpt:
      "Uncover the potential of digital therapeutics with Significo's DTx team. Learn how technology is transforming traditional approaches to healthcare.",
  },
];

export default function BlogPage() {
  return (
    <div>
      <BlogPostHero />
      <TopicResourceBar/>
      <Article
        category="Thought Leadership"
        description="Decades of experience, brought to you."
        articles={articles}
      />

      <Article
        category="Latest Insights"
        description="Explore cutting-edge perspectives and industry-leading expertise from our thought leaders."
        articles={articles}
      />

      <TestOne/>
    </div>
  );
}
