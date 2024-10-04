import CardCase from "./CardCase";
import CardsSec from "./CardsSec";
import ClientAll from "./ClientAll";
import HeroPage from "./Hero/HeroSSr";
import BlogPostsServer from "./HomeBlog/BlogPostsServer";
import OurTeamPage from "./ourTeam/OurTeamSsr";

export default function All() {
  return (
    <div>
      <ClientAll BlogHome={<BlogPostsServer />} Herossr={<HeroPage />} ourTeam={<OurTeamPage />}>
        <CardCase />
      </ClientAll>
    </div>
  );
}
