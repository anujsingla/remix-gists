import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";

console.log("document", document);

hydrate(<RemixBrowser />, document);
