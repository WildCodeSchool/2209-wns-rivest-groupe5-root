interface IActivityUserInfos {
  userId: number;
  email: string;
}
interface IActivityTypeInfos {
  activityTypeId: number;
  name: string;
}

export interface ITestActivity {
  activityId: number;
  title: string;
  user: IActivityUserInfos;
  activityType: IActivityTypeInfos;
}
