USE [HealthCareMaster]
GO

/****** Object:  Table [dbo].[Provider]    Script Date: 8/20/2019 1:28:02 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Provider](
	[ProviderID] [int] NOT NULL,
	[ProviderName] [varchar](70) NULL,
	[ProviderFIrstName] [varchar](50) NULL,
	[ProviderMidName] [varchar](50) NULL,
	[ProviderLastName] [varchar](50) NULL,
	[PrimaryAddress1] [varchar](50) NULL,
	[PrimaryAddress2] [varchar](50) NULL,
	[PrimaryCity] [varchar](50) NULL,
	[PrimaryState] [char](2) NULL,
	[PrimaryZipCode] [varchar](10) NULL,
	[PrimaryPhone] [varchar](20) NULL,
	[MailingAddress1] [varchar](50) NULL,
	[MailingAddress2] [varchar](50) NULL,
	[MailingCity] [varchar](50) NULL,
	[MailingState] [char](2) NULL,
	[MailingZipCode] [varchar](10) NULL,
	[PrimaryActivity] [varchar](50) NULL,
	[Speciality] [varchar](50) NULL,
	[NPI_ID] [char](10) NULL,
	[MedicalSchool] [varchar](50) NULL,
	[Degree] [varchar](50) NULL,
	[YearAwarded] [char](4) NULL,
 CONSTRAINT [PK_Provider] PRIMARY KEY CLUSTERED 
(
	[ProviderID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

