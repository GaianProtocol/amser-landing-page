export interface IJob {
  id: string;
  title: string;
  rewardAmount: number;
  deadline: string;
  type: "bounty" | "project";
  token: string;
  slug: string;
  sponsor: {
    name: string;
    logo: string;
  };
  _count: {
    Comments: number;
    Submission: number;
  };
  detail: {
    main_content: string;
  };
}
