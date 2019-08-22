USE [HealthCareMaster]
GO

/****** Object:  Table [dbo].[ProviderCert]    Script Date: 8/20/2019 1:28:24 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ProviderCert](
	[ProviderCertID] [int] NOT NULL,
	[ProviderID] [int] NOT NULL,
	[Board] [varchar](50) NULL,
	[Certification] [varchar](50) NULL,
	[PrimaryCert] [tinyint] NOT NULL
) ON [PRIMARY]

GO

