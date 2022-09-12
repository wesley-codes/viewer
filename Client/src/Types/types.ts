
export type ChildrenProps = {
  screen ?: string
    children:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal;
}


export interface BackDropProps {
    onClose: () => void;
    screen? : string

    children ?:
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactNodeArray
      | React.ReactPortal;
  }

export type ThumbnailTypes = {
id : string;
imgUrl : string;
videoUrl: string 
channelName: string
videoName : string
time: string
views: string
}
