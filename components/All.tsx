import CardCase from "./CaseSt/CardCase";
import ClientAll from "./ClientAll";
import HeroPage from "./Hero/HeroSSr";
import BlogPostsServer from "./HomeBlog/BlogPostsServer";
import OurTeamPage from "./ourTeam/OurTeamSsr";
import CardProjectssr from "./CaseSt/CardProjectssr";

export default function All() {
  return (
    <div>
      <ClientAll BlogHome={<BlogPostsServer />} Herossr={<HeroPage />} ourTeam={<OurTeamPage />}>
        <CardProjectssr />
      </ClientAll>
    </div>
  );
}
