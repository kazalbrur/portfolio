import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

// Helper to extract first image from Medium content if thumbnail is missing
function extractCoverImage(description) {
  if (!description) return null;
  const imgMatch = description.match(/<img[^>]+src="([^">]+)"/);
  return imgMatch ? imgMatch[1] : null;
}

const ArticlesCard = (props) => {
  const { data, setActiveCard, onOpen } = props;
  const articleUrl = data.link;
  // Try thumbnail, then extract from description, then fallback
  const imageUrl =
    data.thumbnail && data.thumbnail !== "" && data.thumbnail !== "self"
      ? data.thumbnail
      : extractCoverImage(data.description) || "/default-blog-cover.jpg";
  const brief = data.description
    ? (() => {
        // Remove HTML tags for preview
        const div = document.createElement("div");
        div.innerHTML = data.description;
        return div.textContent || div.innerText || "";
      })()
    : "";

  return (
    <>
      <Card
        backgroundColor="blueTheme.card"
        width="20rem"
        height="28rem"
        margin="0.5rem"
        boxShadow="0 10px 30px -15px blueTheme.navShadow"
      >
        <CardBody>
          <Image
            objectFit="cover"
            src={imageUrl}
            alt="Blog Cover"
            width="100%"
            height="10rem"
            borderRadius="md"
            fallbackSrc="/default-blog-cover.jpg"
          />
          <Heading size="sm" my={3}>
            {data.title}
          </Heading>
          <Box fontSize="0.9rem">
            {brief.substring(0, 100)}...
            <Text
              mx={3}
              display="inline"
              color="#068FFF"
              fontSize="0.9rem"
              cursor="pointer"
              _hover={{ color: "#4E4FEB" }}
              onClick={() => {
                setActiveCard(data);
                onOpen(true);
              }}
            >
              Read more
            </Text>
          </Box>
          <Button
            as="a"
            href={articleUrl}
            marginTop="1rem"
            size="sm"
            target="_blank"
          >
            Read here
            <Icon ml={2} as={FaExternalLinkAlt} />
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default ArticlesCard;
