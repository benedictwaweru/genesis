'use client';

import * as React from 'react';

import { testData as data, navSecondary } from '@/data/mockData';

import { NavMain } from '@/components/common/nav-main';
import { NavProjects } from '@/components/common/nav-projects';
import { NavSecondary } from '@/components/common/nav-secondary';
import { NavUser } from '@/components/common/nav-user';
import { TeamSwitcher } from '@/components/common/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
