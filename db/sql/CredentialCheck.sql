USE [HealthCareMaster]
GO

/****** Object:  Table [dbo].[CredentialCheck]    Script Date: 8/20/2019 1:27:43 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[CredentialCheck](
	[CredentialCheckID] [int] NOT NULL,
	[ProviderID] [int] NOT NULL,
	[PrimaryActivity] [varchar](50) NULL,
	[NPI_ID] [nchar](10) NULL,
	[EnumerationDate] [date] NULL,
	[NPI_Status] [varchar](50) NULL,
	[LicenseState] [char](2) NULL,
	[LicenseNum] [varchar](50) NULL,
	[Specialty] [varchar](50) NULL,
	[SubSpecialty] [varchar](50) NULL,
	[DEA_OrderDate] [date] NULL,
	[DEA_Order] [varchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO

