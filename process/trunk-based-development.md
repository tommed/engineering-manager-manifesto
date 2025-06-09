---
layout: page
title: Trunk-based Development
nav_exclude: true
---

Trunk-based development is a software engineering practice where all developers
collaborate on a single branch, usually 'main' for GitHub, rather than working
on long-lived feature branches. The core idea is to keep changes small, integrate
frequently, and avoid the pain of complex merges and integration hell.

This approach encourages a culture of continuous integration and rapid feedback.
By committing directly to the trunk, teams reduce the risk of diverging codebases
and ensure that everyone is working with the latest version. It also supports
faster delivery of value to users, as features and fixes can be released more
quickly and reliably.

In my experience, trunk-based development is not just a technical choice
but a mindset shift. It requires discipline, strong communication, and a
willingness to embrace automation—especially around testing and deployment.
When done well, it leads to higher quality software, happier teams, and a
more predictable release process.

## Key Principles

- **Short-lived branches:** If branches are used at all, they are kept
  extremely short-lived (hours or a day at most).
- **Frequent commits:** Developers commit to the trunk multiple times a
  day, integrating their work continuously.
- **Automated testing:** A robust suite of automated tests is essential
  to catch issues early and maintain confidence in rapid changes.
- **Feature toggles:** New features are often hidden behind toggles,
  allowing incomplete work to be merged safely.

Trunk-based development is at the heart of modern engineering teams
aiming for speed, quality, and collaboration. It’s a practice I strongly
recommend for teams looking to scale their delivery without sacrificing
stability.

## Developer Workflow

This is my ideal workflow for every developer.

You'll also notice that _most_ of this is applied to this repo. Some aren't
relevant as there's no actual code and only one contributor, but everything that
can be set, is (including strict Markdown linting). I eat my own dog food!

![Status Checks for this Repo]({{
  '/assets/images/this-repo-status-checks.png' | relative_url
}})

![On merge into main, build and deploy]({{
  '/assets/images/this-repo-main-deploy.png' | relative_url
}})

### Steps

1. Design and Document your change request
1. Create a semantically named branch, such as:
   - `feat/` for new features
   - `fix/` for bug fixes
   - `chore/` for maintenance tasks
   - `docs/` for documentation updates
1. Make minimal changes, don't wait for the entire feature to be finished
1. Unit test using valuable unit tests
1. Incorporate feature flags to control visibility
1. Create a PR which links to the ticket, documentation and mention the feature
   flag
1. Protect the trunk so PRs can only be merged when:
   a. code is reviewed
   a. at least one label is applied to the PR
   a. branch is up-to-date with main, so no surprises when merging
   a. Status checks pass:
      a. builds successfully
      a. lints clean
      a. tests are passing
   a. code coverage is above your agreed threshold
   a. The feature flag is mentioned in the PR description (or `#nofeatureflag`)
   a. Ticket link/ID is included in PR description
1. Once all tests have completed, the `deploy` process
   starts during the PR merge to 'main'
1. Branch is deleted
1. Product is pushed into staging
1. Each check-in should make it to production independently and automatically
   once all staging tests have been successfully completed. Ideally this is
   automated as part of the CI/CD, otherwise manually signed-off and promoted
   using a manual GitHub Action once manual checks are completed. Where a
   manual process is done, effort should be planned to automate this

### To Be Included

- [ ] Kick of automated QA testing
- [ ] Time the process (for DORA metrics) between PR
      merging and the code is live in production
