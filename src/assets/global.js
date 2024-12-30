import { ref } from "vue";

export const can = ref(false);
export const isnext = ref(false);
export const gogo = ref(true);
export const contain = ref(false);
export const isScoll = ref(false);
export const userid = ref(null);
export const avatar = ref(null);
export const days = ref(0)

export const liuyang = ref({
  userId: 70521,
  username: "ewj12",
  nickname: "nnn123",
  createdAt: "2022-07-25T15:12:22.000Z",
  lastTime: "2024-11-29T05:58:26.000Z",
  avatar: "70521_b2b9b0c783f3c414.png",
  rating: 1411,
  type: 1,
  annualActive: true,
  accepted: 346,
  submitted: 354,
  annualNewAccepted: 49,
  achievements: [
    "SolutionGetAC",
    "SolveProblemsLv3",
    "SolveInContinuouslyDayLv1",
    "SolveInOneDay",
    "NightSolver",
    "CompleteSetAll",
    "CompleteSetPartially",
    "AttendRatingCompetitionsLv1",
    "AttendRatingCompetitionsLv2",
    "AttendCompetitionSDUTPC",
    "AttendCompetitionAzurSeries",
    "AttendCompetitionGenshinImpact",
    "TooManyPenalties",
    "CompetitionACCombo",
    "SolveDuringFrozenTime",
    "SetAvatar",
    "SetBannerImage",
    "SolutionGetWA",
    "SolutionGetMLE",
    "SolutionGetRTE",
    "SolveWithAttemptedLv1",
    "SolutionFailedOnFirstTest",
    "SolutionGetTLE",
    "SolutionGetCE",
    "SolveProblemsLv1",
    "SolveProblemsLv2",
    "SolveWithMultiResults",
    "SolveWithAttemptedLv2",
    "SolutionFailedOnLastTest",
  ],
  createdDateStr: "2022-07-25",
  annualNewAcceptedTopPercent: 0.08210251954821894,
  nightWalker: null,
  acMostDay: {
    dateStr: "1 月 29 日",
    count: 10,
  },
  maxTries: {
    problemId: 5191,
    problemTitle: "我最喜欢吃饭了",
    count: 30,
  },
  competition: {
    attendedCompetitionCount: 2,
    attendedCompetitions: [
      {
        key: "asGenshin",
        title: "蔚蓝系列赛 R2：原神主题赛",
        unofficialParticipation: false,
        rank: {
          user: {
            userId: 70521,
            nickname: "我推的水神",
          },
          score: 1610,
          time: 21645,
          rank: 59,
          rawRank: 59,
        },
        rankStr: "第 59 名",
        awardStr: "第 59 名",
        medal: null,
      },
      {
        key: "sdutpc16",
        title: "第十六届校赛",
        unofficialParticipation: false,
        rank: {
          user: {
            userId: 70521,
            nickname: "一枪6480破甲线",
          },
          score: 5,
          time: 52824,
          rank: 45,
          rawRank: 93,
        },
        rankStr: "第 45 名",
        awardStr: "银奖",
        medal: "silver",
      },
    ],
    bestRankCompetition: {
      key: "sdutpc16",
      title: "第十六届校赛",
      unofficialParticipation: false,
      rank: {
        user: {
          userId: 70521,
          nickname: "一枪6480破甲线",
        },
        score: 5,
        time: 52824,
        rank: 45,
        rawRank: 93,
      },
      rankStr: "第 45 名",
      awardStr: "银奖",
      medal: "silver",
    },
    asGenshin: {
      travelerCount: 132,
      genshinLaunchWord: "原神启动",
      firstUnlockedCountry: "mondstadt",
    },
    sdutpc16: {
      officialParticipantCount: 109,
      unofficialParticipantCount: 148,
      awardStr: "银奖",
    },
    sdutncc6th: null,
    sdutpmc16th: null,
  },
});

export const global = ref(null)
