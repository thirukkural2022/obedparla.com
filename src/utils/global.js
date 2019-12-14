import urljoin from "url-join";
import moment from "moment";
import config from "../../data/SiteConfig";

const formatDate = date =>
  moment(date, config.dateFromFormat).format("MMMM Do, YYYY");

const editOnGithub = post =>
  urljoin(
    config.repo,
    "/blob/master/content/posts",
    `${formatDate(post.date)}-${post.slug}.md`
  );

export { formatDate, editOnGithub };
