import { Timesheet } from "@/types/propsTypes";

export const timesheets: Timesheet[] = [
  {
    id: 1,
    week: 1,
    date: "29 December - 2 January, 2026",
    startDate: "2025-12-29T00:00:00.000Z",
    endDate: "2026-01-02T00:00:00.000Z",
    detail: {
      title: "Week 1 Timesheet",
      weekRange: "29 December - 2 January, 2026",
      totalHours: 40,
      targetHours: 40,
      days: [
        {
          date: "Dec 29",
          tasks: [
            {
              id: "1-1",
              taskName: "Homepage Development",
              hours: 4,
              projectName: "Project Alpha",
            },
            {
              id: "1-2",
              taskName: "API Development",
              hours: 4,
              projectName: "Project Alpha",
            },
          ],
        },
        {
          date: "Dec 30",
          tasks: [
            {
              id: "2-1",
              taskName: "Homepage Development",
              hours: 4,
              projectName: "Project Alpha",
            },
            {
              id: "2-2",
              taskName: "Component Integration",
              hours: 4,
              projectName: "Project Alpha",
            },
          ],
        },
        {
          date: "Dec 31",
          tasks: [
            {
              id: "3-1",
              taskName: "UI Design",
              hours: 4,
              projectName: "Project Beta",
            },
            {
              id: "3-2",
              taskName: "Responsive Layout",
              hours: 4,
              projectName: "Project Beta",
            },
          ],
        },
        {
          date: "Jan 1",
          tasks: [
            {
              id: "4-1",
              taskName: "Bug Fixes",
              hours: 4,
              projectName: "Project Beta",
            },
            {
              id: "4-2",
              taskName: "Code Review",
              hours: 4,
              projectName: "Project Beta",
            },
          ],
        },
        {
          date: "Jan 2",
          tasks: [
            {
              id: "5-1",
              taskName: "API Development",
              hours: 4,
              projectName: "Project Alpha",
            },
            {
              id: "5-2",
              taskName: "Testing",
              hours: 4,
              projectName: "Project Alpha",
            },
          ],
        },
      ],
    },
  },
  {
    id: 2,
    week: 2,
    date: "5 January - 9 January, 2026",
    startDate: "2026-01-05T00:00:00.000Z",
    endDate: "2026-01-09T00:00:00.000Z",
    detail: {
      title: "Week 2 Timesheet",
      weekRange: "5 January - 9 January, 2026",
      totalHours: 40,
      targetHours: 40,
      days: [
        {
          date: "Jan 5",
          tasks: [
            {
              id: "8-1",
              taskName: "Database Design",
              hours: 4,
              projectName: "Project Gamma",
            },
            {
              id: "8-2",
              taskName: "Schema Design",
              hours: 4,
              projectName: "Project Gamma",
            },
          ],
        },
        {
          date: "Jan 6",
          tasks: [
            {
              id: "9-1",
              taskName: "Database Design",
              hours: 4,
              projectName: "Project Gamma",
            },
            {
              id: "9-2",
              taskName: "Index Optimization",
              hours: 4,
              projectName: "Project Gamma",
            },
          ],
        },
        {
          date: "Jan 7",
          tasks: [
            {
              id: "10-1",
              taskName: "API Development",
              hours: 4,
              projectName: "Project Alpha",
            },
            {
              id: "10-2",
              taskName: "Endpoint Implementation",
              hours: 4,
              projectName: "Project Alpha",
            },
          ],
        },
        {
          date: "Jan 8",
          tasks: [
            {
              id: "11-1",
              taskName: "Testing",
              hours: 4,
              projectName: "Project Gamma",
            },
            {
              id: "11-2",
              taskName: "Unit Tests",
              hours: 4,
              projectName: "Project Gamma",
            },
          ],
        },
        {
          date: "Jan 9",
          tasks: [
            {
              id: "12-1",
              taskName: "Documentation",
              hours: 4,
              projectName: "Project Gamma",
            },
            {
              id: "12-2",
              taskName: "API Documentation",
              hours: 4,
              projectName: "Project Gamma",
            },
          ],
        },
      ],
    },
  },
  {
    id: 3,
    week: 3,
    date: "12 January - 16 January, 2026",
    startDate: "2026-01-12T00:00:00.000Z",
    endDate: "2026-01-16T00:00:00.000Z",
    detail: {
      title: "Week 3 Timesheet",
      weekRange: "12 January - 16 January, 2026",
      totalHours: 24,
      targetHours: 40,
      days: [
        {
          date: "Jan 12",
          tasks: [
            {
              id: "15-1",
              taskName: "Homepage Development",
              hours: 8,
              projectName: "Project Alpha",
            },
          ],
        },
        {
          date: "Jan 13",
          tasks: [
            {
              id: "16-1",
              taskName: "Homepage Development",
              hours: 8,
              projectName: "Project Alpha",
            },
          ],
        },
        {
          date: "Jan 14",
          tasks: [
            {
              id: "17-1",
              taskName: "UI Design",
              hours: 8,
              projectName: "Project Beta",
            },
          ],
        },
        {
          date: "Jan 15",
          tasks: [],
        },
        {
          date: "Jan 16",
          tasks: [],
        },
      ],
    },
  },
  {
    id: 4,
    week: 4,
    date: "19 January - 23 January, 2026",
    startDate: "2026-01-19T00:00:00.000Z",
    endDate: "2026-01-23T00:00:00.000Z",
    detail: {
      title: "Week 4 Timesheet",
      weekRange: "19 January - 23 January, 2026",
      totalHours: 0,
      targetHours: 40,
      days: [
        { date: "Jan 19", tasks: [] },
        { date: "Jan 20", tasks: [] },
        { date: "Jan 21", tasks: [] },
        { date: "Jan 22", tasks: [] },
        { date: "Jan 23", tasks: [] },
      ],
    },
  },
  {
    id: 5,
    week: 5,
    date: "26 January - 30 January, 2026",
    startDate: "2026-01-26T00:00:00.000Z",
    endDate: "2026-01-30T00:00:00.000Z",
    detail: {
      title: "Week 5 Timesheet",
      weekRange: "26 January - 30 January, 2026",
      totalHours: 40,
      targetHours: 40,
      days: [
        {
          date: "Jan 26",
          tasks: [
            {
              id: "29-1",
              taskName: "Feature Development",
              hours: 4,
              projectName: "Project Delta",
            },
            {
              id: "29-2",
              taskName: "Feature Implementation",
              hours: 4,
              projectName: "Project Delta",
            },
          ],
        },
        {
          date: "Jan 27",
          tasks: [
            {
              id: "30-1",
              taskName: "Feature Development",
              hours: 4,
              projectName: "Project Delta",
            },
            {
              id: "30-2",
              taskName: "Bug Fixes",
              hours: 4,
              projectName: "Project Delta",
            },
          ],
        },
        {
          date: "Jan 28",
          tasks: [
            {
              id: "31-1",
              taskName: "Code Review",
              hours: 4,
              projectName: "Project Delta",
            },
            {
              id: "31-2",
              taskName: "Refactoring",
              hours: 4,
              projectName: "Project Delta",
            },
          ],
        },
        {
          date: "Jan 29",
          tasks: [
            {
              id: "1-1",
              taskName: "Deployment",
              hours: 4,
              projectName: "Project Delta",
            },
            {
              id: "1-2",
              taskName: "CI/CD Setup",
              hours: 4,
              projectName: "Project Delta",
            },
          ],
        },
        {
          date: "Jan 30",
          tasks: [
            {
              id: "2-1",
              taskName: "Testing",
              hours: 4,
              projectName: "Project Delta",
            },
            {
              id: "2-2",
              taskName: "Integration Tests",
              hours: 4,
              projectName: "Project Delta",
            },
          ],
        },
      ],
    },
  },
  {
    id: 6,
    week: 6,
    date: "2 February - 6 February, 2026",
    startDate: "2026-02-02T00:00:00.000Z",
    endDate: "2026-02-06T00:00:00.000Z",
    detail: {
      title: "Week 6 Timesheet",
      weekRange: "2 February - 6 February, 2026",
      totalHours: 32,
      targetHours: 40,
      days: [
        {
          date: "Feb 2",
          tasks: [
            {
              id: "5-1",
              taskName: "Backend API",
              hours: 8,
              projectName: "Project Epsilon",
            },
          ],
        },
        {
          date: "Feb 3",
          tasks: [
            {
              id: "6-1",
              taskName: "Backend API",
              hours: 8,
              projectName: "Project Epsilon",
            },
          ],
        },
        {
          date: "Feb 4",
          tasks: [
            {
              id: "7-1",
              taskName: "Backend API",
              hours: 8,
              projectName: "Project Epsilon",
            },
          ],
        },
        {
          date: "Feb 5",
          tasks: [
            {
              id: "8-1",
              taskName: "Backend API",
              hours: 8,
              projectName: "Project Epsilon",
            },
          ],
        },
        { date: "Feb 6", tasks: [] },
      ],
    },
  },
  {
    id: 7,
    week: 7,
    date: "9 February - 13 February, 2026",
    startDate: "2026-02-09T00:00:00.000Z",
    endDate: "2026-02-13T00:00:00.000Z",
    detail: {
      title: "Week 7 Timesheet",
      weekRange: "9 February - 13 February, 2026",
      totalHours: 40,
      targetHours: 40,
      days: [
        {
          date: "Feb 9",
          tasks: [
            {
              id: "12-1",
              taskName: "Frontend Development",
              hours: 4,
              projectName: "Project Zeta",
            },
            {
              id: "12-2",
              taskName: "Component Building",
              hours: 4,
              projectName: "Project Zeta",
            },
          ],
        },
        {
          date: "Feb 10",
          tasks: [
            {
              id: "13-1",
              taskName: "Frontend Development",
              hours: 4,
              projectName: "Project Zeta",
            },
            {
              id: "13-2",
              taskName: "State Management",
              hours: 4,
              projectName: "Project Zeta",
            },
          ],
        },
        {
          date: "Feb 11",
          tasks: [
            {
              id: "14-1",
              taskName: "Frontend Development",
              hours: 4,
              projectName: "Project Zeta",
            },
            {
              id: "14-2",
              taskName: "API Integration",
              hours: 4,
              projectName: "Project Zeta",
            },
          ],
        },
        {
          date: "Feb 12",
          tasks: [
            {
              id: "15-1",
              taskName: "Frontend Development",
              hours: 4,
              projectName: "Project Zeta",
            },
            {
              id: "15-2",
              taskName: "Styling",
              hours: 4,
              projectName: "Project Zeta",
            },
          ],
        },
        {
          date: "Feb 13",
          tasks: [
            {
              id: "16-1",
              taskName: "Frontend Development",
              hours: 4,
              projectName: "Project Zeta",
            },
            {
              id: "16-2",
              taskName: "Testing",
              hours: 4,
              projectName: "Project Zeta",
            },
          ],
        },
      ],
    },
  },
  {
    id: 8,
    week: 8,
    date: "16 February - 20 February, 2026",
    startDate: "2026-02-16T00:00:00.000Z",
    endDate: "2026-02-20T00:00:00.000Z",
    detail: {
      title: "Week 8 Timesheet",
      weekRange: "16 February - 20 February, 2026",
      totalHours: 16,
      targetHours: 40,
      days: [
        {
          date: "Feb 16",
          tasks: [
            {
              id: "19-1",
              taskName: "Bug Fixes",
              hours: 8,
              projectName: "Project Alpha",
            },
          ],
        },
        {
          date: "Feb 17",
          tasks: [
            {
              id: "20-1",
              taskName: "Bug Fixes",
              hours: 8,
              projectName: "Project Alpha",
            },
          ],
        },
        { date: "Feb 18", tasks: [] },
        { date: "Feb 19", tasks: [] },
        { date: "Feb 20", tasks: [] },
      ],
    },
  },
  {
    id: 9,
    week: 9,
    date: "23 February - 27 February, 2026",
    startDate: "2026-02-23T00:00:00.000Z",
    endDate: "2026-02-27T00:00:00.000Z",
    detail: {
      title: "Week 9 Timesheet",
      weekRange: "23 February - 27 February, 2026",
      totalHours: 40,
      targetHours: 40,
      days: [
        {
          date: "Feb 23",
          tasks: [
            {
              id: "26-1",
              taskName: "System Design",
              hours: 4,
              projectName: "Project Omega",
            },
            {
              id: "26-2",
              taskName: "Architecture Planning",
              hours: 4,
              projectName: "Project Omega",
            },
          ],
        },
        {
          date: "Feb 24",
          tasks: [
            {
              id: "27-1",
              taskName: "System Design",
              hours: 4,
              projectName: "Project Omega",
            },
            {
              id: "27-2",
              taskName: "Database Schema",
              hours: 4,
              projectName: "Project Omega",
            },
          ],
        },
        {
          date: "Feb 25",
          tasks: [
            {
              id: "28-1",
              taskName: "System Design",
              hours: 4,
              projectName: "Project Omega",
            },
            {
              id: "28-2",
              taskName: "API Design",
              hours: 4,
              projectName: "Project Omega",
            },
          ],
        },
        {
          date: "Feb 26",
          tasks: [
            {
              id: "29-1",
              taskName: "System Design",
              hours: 4,
              projectName: "Project Omega",
            },
            {
              id: "29-2",
              taskName: "Security Design",
              hours: 4,
              projectName: "Project Omega",
            },
          ],
        },
        {
          date: "Feb 27",
          tasks: [
            {
              id: "1-1",
              taskName: "System Design",
              hours: 4,
              projectName: "Project Omega",
            },
            {
              id: "1-2",
              taskName: "Documentation",
              hours: 4,
              projectName: "Project Omega",
            },
          ],
        },
      ],
    },
  },
  {
    id: 10,
    week: 10,
    date: "2 March - 6 March, 2026",
    startDate: "2026-03-02T00:00:00.000Z",
    endDate: "2026-03-06T00:00:00.000Z",
    detail: {
      title: "Week 10 Timesheet",
      weekRange: "2 March - 6 March, 2026",
      totalHours: 0,
      targetHours: 40,
      days: [
        { date: "Mar 2", tasks: [] },
        { date: "Mar 3", tasks: [] },
        { date: "Mar 4", tasks: [] },
        { date: "Mar 5", tasks: [] },
        { date: "Mar 6", tasks: [] },
      ],
    },
  },
  {
    id: 11,
    week: 11,
    date: "9 March - 13 March, 2026",
    startDate: "2026-03-09T00:00:00.000Z",
    endDate: "2026-03-13T00:00:00.000Z",
    detail: {
      title: "Week 11 Timesheet",
      weekRange: "9 March - 13 March, 2026",
      totalHours: 36,
      targetHours: 40,
      days: [
        {
          date: "Mar 9",
          tasks: [
            {
              id: "11-1",
              taskName: "API Integration",
              hours: 8,
              projectName: "Project Beta",
            },
          ],
        },
        {
          date: "Mar 10",
          tasks: [
            {
              id: "12-1",
              taskName: "API Integration",
              hours: 8,
              projectName: "Project Beta",
            },
          ],
        },
        {
          date: "Mar 11",
          tasks: [
            {
              id: "13-1",
              taskName: "API Integration",
              hours: 8,
              projectName: "Project Beta",
            },
          ],
        },
        {
          date: "Mar 12",
          tasks: [
            {
              id: "14-1",
              taskName: "API Integration",
              hours: 8,
              projectName: "Project Beta",
            },
          ],
        },
        {
          date: "Mar 13",
          tasks: [
            {
              id: "15-1",
              taskName: "API Integration",
              hours: 4,
              projectName: "Project Beta",
            },
          ],
        },
      ],
    },
  },
  {
    id: 12,
    week: 12,
    date: "16 March - 20 March, 2026",
    startDate: "2026-03-16T00:00:00.000Z",
    endDate: "2026-03-20T00:00:00.000Z",
    detail: {
      title: "Week 12 Timesheet",
      weekRange: "16 March - 20 March, 2026",
      totalHours: 40,
      targetHours: 40,
      days: [
        {
          date: "Mar 16",
          tasks: [
            {
              id: "18-1",
              taskName: "Performance Optimization",
              hours: 4,
              projectName: "Project Gamma",
            },
            {
              id: "18-2",
              taskName: "Query Optimization",
              hours: 4,
              projectName: "Project Gamma",
            },
          ],
        },
        {
          date: "Mar 17",
          tasks: [
            {
              id: "19-1",
              taskName: "Performance Optimization",
              hours: 4,
              projectName: "Project Gamma",
            },
            {
              id: "19-2",
              taskName: "Caching Strategy",
              hours: 4,
              projectName: "Project Gamma",
            },
          ],
        },
        {
          date: "Mar 18",
          tasks: [
            {
              id: "20-1",
              taskName: "Performance Optimization",
              hours: 4,
              projectName: "Project Gamma",
            },
            {
              id: "20-2",
              taskName: "Load Balancing",
              hours: 4,
              projectName: "Project Gamma",
            },
          ],
        },
        {
          date: "Mar 19",
          tasks: [
            {
              id: "21-1",
              taskName: "Performance Optimization",
              hours: 4,
              projectName: "Project Gamma",
            },
            {
              id: "21-2",
              taskName: "Database Tuning",
              hours: 4,
              projectName: "Project Gamma",
            },
          ],
        },
        {
          date: "Mar 20",
          tasks: [
            {
              id: "22-1",
              taskName: "Performance Optimization",
              hours: 4,
              projectName: "Project Gamma",
            },
            {
              id: "22-2",
              taskName: "Monitoring Setup",
              hours: 4,
              projectName: "Project Gamma",
            },
          ],
        },
      ],
    },
  },
  {
    id: 13,
    week: 13,
    date: "23 March - 27 March, 2026",
    startDate: "2026-03-23T00:00:00.000Z",
    endDate: "2026-03-27T00:00:00.000Z",
    detail: {
      title: "Week 13 Timesheet",
      weekRange: "23 March - 27 March, 2026",
      totalHours: 8,
      targetHours: 40,
      days: [
        {
          date: "Mar 23",
          tasks: [
            {
              id: "25-1",
              taskName: "Documentation",
              hours: 8,
              projectName: "Project Alpha",
            },
          ],
        },
        { date: "Mar 24", tasks: [] },
        { date: "Mar 25", tasks: [] },
        { date: "Mar 26", tasks: [] },
        { date: "Mar 27", tasks: [] },
      ],
    },
  },
  {
    id: 14,
    week: 14,
    date: "30 March - 3 April, 2026",
    startDate: "2026-03-30T00:00:00.000Z",
    endDate: "2026-04-03T00:00:00.000Z",
    detail: {
      title: "Week 14 Timesheet",
      weekRange: "30 March - 3 April, 2026",
      totalHours: 40,
      targetHours: 40,
      days: [
        {
          date: "Mar 30",
          tasks: [
            {
              id: "1-1",
              taskName: "Mobile Development",
              hours: 4,
              projectName: "Project Mobile",
            },
            {
              id: "1-2",
              taskName: "iOS Development",
              hours: 4,
              projectName: "Project Mobile",
            },
          ],
        },
        {
          date: "Mar 31",
          tasks: [
            {
              id: "2-1",
              taskName: "Mobile Development",
              hours: 4,
              projectName: "Project Mobile",
            },
            {
              id: "2-2",
              taskName: "Android Development",
              hours: 4,
              projectName: "Project Mobile",
            },
          ],
        },
        {
          date: "Apr 1",
          tasks: [
            {
              id: "3-1",
              taskName: "Mobile Development",
              hours: 4,
              projectName: "Project Mobile",
            },
            {
              id: "3-2",
              taskName: "UI Components",
              hours: 4,
              projectName: "Project Mobile",
            },
          ],
        },
        {
          date: "Apr 2",
          tasks: [
            {
              id: "4-1",
              taskName: "Mobile Development",
              hours: 4,
              projectName: "Project Mobile",
            },
            {
              id: "4-2",
              taskName: "API Integration",
              hours: 4,
              projectName: "Project Mobile",
            },
          ],
        },
        {
          date: "Apr 3",
          tasks: [
            {
              id: "5-1",
              taskName: "Mobile Development",
              hours: 4,
              projectName: "Project Mobile",
            },
            {
              id: "5-2",
              taskName: "Testing",
              hours: 4,
              projectName: "Project Mobile",
            },
          ],
        },
      ],
    },
  },
  {
    id: 15,
    week: 15,
    date: "6 April - 10 April, 2026",
    startDate: "2026-04-06T00:00:00.000Z",
    endDate: "2026-04-10T00:00:00.000Z",
    detail: {
      title: "Week 15 Timesheet",
      weekRange: "6 April - 10 April, 2026",
      totalHours: 40,
      targetHours: 40,
      days: [
        {
          date: "Apr 6",
          tasks: [
            {
              id: "8-1",
              taskName: "DevOps Setup",
              hours: 4,
              projectName: "Project DevOps",
            },
            {
              id: "8-2",
              taskName: "CI/CD Pipeline",
              hours: 4,
              projectName: "Project DevOps",
            },
          ],
        },
        {
          date: "Apr 7",
          tasks: [
            {
              id: "9-1",
              taskName: "DevOps Setup",
              hours: 4,
              projectName: "Project DevOps",
            },
            {
              id: "9-2",
              taskName: "Docker Configuration",
              hours: 4,
              projectName: "Project DevOps",
            },
          ],
        },
        {
          date: "Apr 8",
          tasks: [
            {
              id: "10-1",
              taskName: "DevOps Setup",
              hours: 4,
              projectName: "Project DevOps",
            },
            {
              id: "10-2",
              taskName: "Kubernetes Setup",
              hours: 4,
              projectName: "Project DevOps",
            },
          ],
        },
        {
          date: "Apr 9",
          tasks: [
            {
              id: "11-1",
              taskName: "DevOps Setup",
              hours: 4,
              projectName: "Project DevOps",
            },
            {
              id: "11-2",
              taskName: "Monitoring",
              hours: 4,
              projectName: "Project DevOps",
            },
          ],
        },
        {
          date: "Apr 10",
          tasks: [
            {
              id: "12-1",
              taskName: "DevOps Setup",
              hours: 4,
              projectName: "Project DevOps",
            },
            {
              id: "12-2",
              taskName: "Security Config",
              hours: 4,
              projectName: "Project DevOps",
            },
          ],
        },
      ],
    },
  },
  {
    id: 16,
    week: 16,
    date: "13 April - 17 April, 2026",
    startDate: "2026-04-13T00:00:00.000Z",
    endDate: "2026-04-17T00:00:00.000Z",
    detail: {
      title: "Week 16 Timesheet",
      weekRange: "13 April - 17 April, 2026",
      totalHours: 20,
      targetHours: 40,
      days: [
        {
          date: "Apr 13",
          tasks: [
            {
              id: "15-1",
              taskName: "Security Audit",
              hours: 8,
              projectName: "Project Security",
            },
          ],
        },
        {
          date: "Apr 14",
          tasks: [
            {
              id: "16-1",
              taskName: "Security Audit",
              hours: 8,
              projectName: "Project Security",
            },
          ],
        },
        { date: "Apr 15", tasks: [] },
        { date: "Apr 16", tasks: [] },
        { date: "Apr 17", tasks: [] },
      ],
    },
  },
  {
    id: 17,
    week: 17,
    date: "20 April - 24 April, 2026",
    startDate: "2026-04-20T00:00:00.000Z",
    endDate: "2026-04-24T00:00:00.000Z",
    detail: {
      title: "Week 17 Timesheet",
      weekRange: "20 April - 24 April, 2026",
      totalHours: 0,
      targetHours: 40,
      days: [
        { date: "Apr 20", tasks: [] },
        { date: "Apr 21", tasks: [] },
        { date: "Apr 22", tasks: [] },
        { date: "Apr 23", tasks: [] },
        { date: "Apr 24", tasks: [] },
      ],
    },
  },
  {
    id: 18,
    week: 18,
    date: "27 April - 1 May, 2026",
    startDate: "2026-04-27T00:00:00.000Z",
    endDate: "2026-05-01T00:00:00.000Z",
    detail: {
      title: "Week 18 Timesheet",
      weekRange: "27 April - 1 May, 2026",
      totalHours: 40,
      targetHours: 40,
      days: [
        {
          date: "Apr 27",
          tasks: [
            {
              id: "29-1",
              taskName: "Data Migration",
              hours: 4,
              projectName: "Project Data",
            },
            {
              id: "29-2",
              taskName: "Data Mapping",
              hours: 4,
              projectName: "Project Data",
            },
          ],
        },
        {
          date: "Apr 28",
          tasks: [
            {
              id: "30-1",
              taskName: "Data Migration",
              hours: 4,
              projectName: "Project Data",
            },
            {
              id: "30-2",
              taskName: "ETL Pipeline",
              hours: 4,
              projectName: "Project Data",
            },
          ],
        },
        {
          date: "Apr 29",
          tasks: [
            {
              id: "1-1",
              taskName: "Data Migration",
              hours: 4,
              projectName: "Project Data",
            },
            {
              id: "1-2",
              taskName: "Data Validation",
              hours: 4,
              projectName: "Project Data",
            },
          ],
        },
        {
          date: "Apr 30",
          tasks: [
            {
              id: "2-1",
              taskName: "Data Migration",
              hours: 4,
              projectName: "Project Data",
            },
            {
              id: "2-2",
              taskName: "Performance Testing",
              hours: 4,
              projectName: "Project Data",
            },
          ],
        },
        {
          date: "May 1",
          tasks: [
            {
              id: "3-1",
              taskName: "Data Migration",
              hours: 4,
              projectName: "Project Data",
            },
            {
              id: "3-2",
              taskName: "Rollback Plan",
              hours: 4,
              projectName: "Project Data",
            },
          ],
        },
      ],
    },
  },
  {
    id: 19,
    week: 19,
    date: "4 May - 8 May, 2026",
    startDate: "2026-05-04T00:00:00.000Z",
    endDate: "2026-05-08T00:00:00.000Z",
    detail: {
      title: "Week 19 Timesheet",
      weekRange: "4 May - 8 May, 2026",
      totalHours: 28,
      targetHours: 40,
      days: [
        {
          date: "May 4",
          tasks: [
            {
              id: "6-1",
              taskName: "User Testing",
              hours: 8,
              projectName: "Project UX",
            },
          ],
        },
        {
          date: "May 5",
          tasks: [
            {
              id: "7-1",
              taskName: "User Testing",
              hours: 8,
              projectName: "Project UX",
            },
          ],
        },
        {
          date: "May 6",
          tasks: [
            {
              id: "8-1",
              taskName: "User Testing",
              hours: 8,
              projectName: "Project UX",
            },
          ],
        },
        {
          date: "May 7",
          tasks: [
            {
              id: "9-1",
              taskName: "User Testing",
              hours: 4,
              projectName: "Project UX",
            },
          ],
        },
        { date: "May 8", tasks: [] },
      ],
    },
  },
  {
    id: 20,
    week: 20,
    date: "11 May - 15 May, 2026",
    startDate: "2026-05-11T00:00:00.000Z",
    endDate: "2026-05-15T00:00:00.000Z",
    detail: {
      title: "Week 20 Timesheet",
      weekRange: "11 May - 15 May, 2026",
      totalHours: 40,
      targetHours: 40,
      days: [
        {
          date: "May 11",
          tasks: [
            {
              id: "13-1",
              taskName: "Final Polish",
              hours: 4,
              projectName: "Project Alpha",
            },
            {
              id: "13-2",
              taskName: "UI Refinements",
              hours: 4,
              projectName: "Project Alpha",
            },
          ],
        },
        {
          date: "May 12",
          tasks: [
            {
              id: "14-1",
              taskName: "Final Polish",
              hours: 4,
              projectName: "Project Alpha",
            },
            {
              id: "14-2",
              taskName: "Bug Fixes",
              hours: 4,
              projectName: "Project Alpha",
            },
          ],
        },
        {
          date: "May 13",
          tasks: [
            {
              id: "15-1",
              taskName: "Final Polish",
              hours: 4,
              projectName: "Project Alpha",
            },
            {
              id: "15-2",
              taskName: "Performance Tuning",
              hours: 4,
              projectName: "Project Alpha",
            },
          ],
        },
        {
          date: "May 14",
          tasks: [
            {
              id: "16-1",
              taskName: "Final Polish",
              hours: 4,
              projectName: "Project Alpha",
            },
            {
              id: "16-2",
              taskName: "Code Cleanup",
              hours: 4,
              projectName: "Project Alpha",
            },
          ],
        },
        {
          date: "May 15",
          tasks: [
            {
              id: "17-1",
              taskName: "Final Polish",
              hours: 4,
              projectName: "Project Alpha",
            },
            {
              id: "17-2",
              taskName: "Documentation",
              hours: 4,
              projectName: "Project Alpha",
            },
          ],
        },
      ],
    },
  },
  {
    id: 21,
    week: 21,
    date: "18 May - 22 May, 2026",
    startDate: "2026-05-18T00:00:00.000Z",
    endDate: "2026-05-22T00:00:00.000Z",
    detail: {
      title: "Week 21 Timesheet",
      weekRange: "18 May - 22 May, 2026",
      totalHours: 40,
      targetHours: 40,
      days: [
        {
          date: "May 18",
          tasks: [
            {
              id: "20-1",
              taskName: "Feature Development",
              hours: 4,
              projectName: "Project New",
            },
            {
              id: "20-2",
              taskName: "API Design",
              hours: 4,
              projectName: "Project New",
            },
          ],
        },
        {
          date: "May 19",
          tasks: [
            {
              id: "21-1",
              taskName: "Feature Development",
              hours: 4,
              projectName: "Project New",
            },
            {
              id: "21-2",
              taskName: "Database Setup",
              hours: 4,
              projectName: "Project New",
            },
          ],
        },
        {
          date: "May 20",
          tasks: [
            {
              id: "22-1",
              taskName: "Feature Development",
              hours: 4,
              projectName: "Project New",
            },
            {
              id: "22-2",
              taskName: "Unit Testing",
              hours: 4,
              projectName: "Project New",
            },
          ],
        },
        {
          date: "May 21",
          tasks: [
            {
              id: "23-1",
              taskName: "Feature Development",
              hours: 4,
              projectName: "Project New",
            },
            {
              id: "23-2",
              taskName: "Code Review",
              hours: 4,
              projectName: "Project New",
            },
          ],
        },
        {
          date: "May 22",
          tasks: [
            {
              id: "24-1",
              taskName: "Feature Development",
              hours: 4,
              projectName: "Project New",
            },
            {
              id: "24-2",
              taskName: "Documentation",
              hours: 4,
              projectName: "Project New",
            },
          ],
        },
      ],
    },
  },
  {
    id: 22,
    week: 22,
    date: "25 May - 29 May, 2026",
    startDate: "2026-05-25T00:00:00.000Z",
    endDate: "2026-05-29T00:00:00.000Z",
    detail: {
      title: "Week 22 Timesheet",
      weekRange: "25 May - 29 May, 2026",
      totalHours: 32,
      targetHours: 40,
      days: [
        {
          date: "May 25",
          tasks: [
            {
              id: "27-1",
              taskName: "Backend Development",
              hours: 8,
              projectName: "Project Backend",
            },
          ],
        },
        {
          date: "May 26",
          tasks: [
            {
              id: "28-1",
              taskName: "Backend Development",
              hours: 8,
              projectName: "Project Backend",
            },
          ],
        },
        {
          date: "May 27",
          tasks: [
            {
              id: "29-1",
              taskName: "Backend Development",
              hours: 8,
              projectName: "Project Backend",
            },
          ],
        },
        {
          date: "May 28",
          tasks: [
            {
              id: "30-1",
              taskName: "Backend Development",
              hours: 8,
              projectName: "Project Backend",
            },
          ],
        },
        { date: "May 29", tasks: [] },
      ],
    },
  },
  {
    id: 23,
    week: 23,
    date: "1 June - 5 June, 2026",
    startDate: "2026-06-01T00:00:00.000Z",
    endDate: "2026-06-05T00:00:00.000Z",
    detail: {
      title: "Week 23 Timesheet",
      weekRange: "1 June - 5 June, 2026",
      totalHours: 40,
      targetHours: 40,
      days: [
        {
          date: "Jun 1",
          tasks: [
            {
              id: "3-1",
              taskName: "Frontend Development",
              hours: 4,
              projectName: "Project Web",
            },
            {
              id: "3-2",
              taskName: "UI Components",
              hours: 4,
              projectName: "Project Web",
            },
          ],
        },
        {
          date: "Jun 2",
          tasks: [
            {
              id: "4-1",
              taskName: "Frontend Development",
              hours: 4,
              projectName: "Project Web",
            },
            {
              id: "4-2",
              taskName: "State Management",
              hours: 4,
              projectName: "Project Web",
            },
          ],
        },
        {
          date: "Jun 3",
          tasks: [
            {
              id: "5-1",
              taskName: "Frontend Development",
              hours: 4,
              projectName: "Project Web",
            },
            {
              id: "5-2",
              taskName: "API Integration",
              hours: 4,
              projectName: "Project Web",
            },
          ],
        },
        {
          date: "Jun 4",
          tasks: [
            {
              id: "6-1",
              taskName: "Frontend Development",
              hours: 4,
              projectName: "Project Web",
            },
            {
              id: "6-2",
              taskName: "Testing",
              hours: 4,
              projectName: "Project Web",
            },
          ],
        },
        {
          date: "Jun 5",
          tasks: [
            {
              id: "7-1",
              taskName: "Frontend Development",
              hours: 4,
              projectName: "Project Web",
            },
            {
              id: "7-2",
              taskName: "Deployment",
              hours: 4,
              projectName: "Project Web",
            },
          ],
        },
      ],
    },
  },
  {
    id: 24,
    week: 24,
    date: "8 June - 12 June, 2026",
    startDate: "2026-06-08T00:00:00.000Z",
    endDate: "2026-06-12T00:00:00.000Z",
    detail: {
      title: "Week 24 Timesheet",
      weekRange: "8 June - 12 June, 2026",
      totalHours: 20,
      targetHours: 40,
      days: [
        {
          date: "Jun 8",
          tasks: [
            {
              id: "10-1",
              taskName: "Bug Fixes",
              hours: 8,
              projectName: "Project Maintenance",
            },
          ],
        },
        {
          date: "Jun 9",
          tasks: [
            {
              id: "11-1",
              taskName: "Bug Fixes",
              hours: 8,
              projectName: "Project Maintenance",
            },
          ],
        },
        { date: "Jun 10", tasks: [] },
        { date: "Jun 11", tasks: [] },
        { date: "Jun 12", tasks: [] },
      ],
    },
  },
  {
    id: 25,
    week: 25,
    date: "15 June - 19 June, 2026",
    startDate: "2026-06-15T00:00:00.000Z",
    endDate: "2026-06-19T00:00:00.000Z",
    detail: {
      title: "Week 25 Timesheet",
      weekRange: "15 June - 19 June, 2026",
      totalHours: 0,
      targetHours: 40,
      days: [
        { date: "Jun 15", tasks: [] },
        { date: "Jun 16", tasks: [] },
        { date: "Jun 17", tasks: [] },
        { date: "Jun 18", tasks: [] },
        { date: "Jun 19", tasks: [] },
      ],
    },
  },
];
