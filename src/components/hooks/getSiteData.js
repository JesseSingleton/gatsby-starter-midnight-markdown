import { useStaticQuery, graphql } from 'gatsby';

export const getSiteData = () => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        social {
                            github
                            linkedin
                        }
                    }
                }
            }
        `
    );

    return site.siteMetadata;
};
