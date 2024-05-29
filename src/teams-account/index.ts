// https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamsAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#account_id TeamsAccount#account_id}
  */
  readonly accountId: string;
  /**
  * Whether to enable the activity log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#activity_log_enabled TeamsAccount#activity_log_enabled}
  */
  readonly activityLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#id TeamsAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable non-identity onramp for Browser Isolation. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#non_identity_browser_isolation_enabled TeamsAccount#non_identity_browser_isolation_enabled}
  */
  readonly nonIdentityBrowserIsolationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicator that protocol detection is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#protocol_detection_enabled TeamsAccount#protocol_detection_enabled}
  */
  readonly protocolDetectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicator that decryption of TLS traffic is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#tls_decrypt_enabled TeamsAccount#tls_decrypt_enabled}
  */
  readonly tlsDecryptEnabled?: boolean | cdktf.IResolvable;
  /**
  * Safely browse websites in Browser Isolation through a URL. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#url_browser_isolation_enabled TeamsAccount#url_browser_isolation_enabled}
  */
  readonly urlBrowserIsolationEnabled?: boolean | cdktf.IResolvable;
  /**
  * antivirus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#antivirus TeamsAccount#antivirus}
  */
  readonly antivirus?: TeamsAccountAntivirus;
  /**
  * block_page block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#block_page TeamsAccount#block_page}
  */
  readonly blockPage?: TeamsAccountBlockPage;
  /**
  * body_scanning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#body_scanning TeamsAccount#body_scanning}
  */
  readonly bodyScanning?: TeamsAccountBodyScanning;
  /**
  * custom_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#custom_certificate TeamsAccount#custom_certificate}
  */
  readonly customCertificate?: TeamsAccountCustomCertificate;
  /**
  * extended_email_matching block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#extended_email_matching TeamsAccount#extended_email_matching}
  */
  readonly extendedEmailMatching?: TeamsAccountExtendedEmailMatching;
  /**
  * fips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#fips TeamsAccount#fips}
  */
  readonly fips?: TeamsAccountFips;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#logging TeamsAccount#logging}
  */
  readonly logging?: TeamsAccountLogging;
  /**
  * payload_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#payload_log TeamsAccount#payload_log}
  */
  readonly payloadLog?: TeamsAccountPayloadLog;
  /**
  * proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#proxy TeamsAccount#proxy}
  */
  readonly proxy?: TeamsAccountProxy;
  /**
  * ssh_session_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#ssh_session_log TeamsAccount#ssh_session_log}
  */
  readonly sshSessionLog?: TeamsAccountSshSessionLog;
}
export interface TeamsAccountAntivirusNotificationSettings {
  /**
  * Enable notification settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#enabled TeamsAccount#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Notification content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#message TeamsAccount#message}
  */
  readonly message?: string;
  /**
  * Support URL to show in the notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#support_url TeamsAccount#support_url}
  */
  readonly supportUrl?: string;
}

export function teamsAccountAntivirusNotificationSettingsToTerraform(struct?: TeamsAccountAntivirusNotificationSettingsOutputReference | TeamsAccountAntivirusNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    message: cdktf.stringToTerraform(struct!.message),
    support_url: cdktf.stringToTerraform(struct!.supportUrl),
  }
}


export function teamsAccountAntivirusNotificationSettingsToHclTerraform(struct?: TeamsAccountAntivirusNotificationSettingsOutputReference | TeamsAccountAntivirusNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    support_url: {
      value: cdktf.stringToHclTerraform(struct!.supportUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamsAccountAntivirusNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsAccountAntivirusNotificationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._supportUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportUrl = this._supportUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsAccountAntivirusNotificationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._message = undefined;
      this._supportUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._message = value.message;
      this._supportUrl = value.supportUrl;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // support_url - computed: false, optional: true, required: false
  private _supportUrl?: string; 
  public get supportUrl() {
    return this.getStringAttribute('support_url');
  }
  public set supportUrl(value: string) {
    this._supportUrl = value;
  }
  public resetSupportUrl() {
    this._supportUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportUrlInput() {
    return this._supportUrl;
  }
}
export interface TeamsAccountAntivirus {
  /**
  * Scan on file download.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#enabled_download_phase TeamsAccount#enabled_download_phase}
  */
  readonly enabledDownloadPhase: boolean | cdktf.IResolvable;
  /**
  * Scan on file upload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#enabled_upload_phase TeamsAccount#enabled_upload_phase}
  */
  readonly enabledUploadPhase: boolean | cdktf.IResolvable;
  /**
  * Block requests for files that cannot be scanned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#fail_closed TeamsAccount#fail_closed}
  */
  readonly failClosed: boolean | cdktf.IResolvable;
  /**
  * notification_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#notification_settings TeamsAccount#notification_settings}
  */
  readonly notificationSettings?: TeamsAccountAntivirusNotificationSettings;
}

export function teamsAccountAntivirusToTerraform(struct?: TeamsAccountAntivirusOutputReference | TeamsAccountAntivirus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_download_phase: cdktf.booleanToTerraform(struct!.enabledDownloadPhase),
    enabled_upload_phase: cdktf.booleanToTerraform(struct!.enabledUploadPhase),
    fail_closed: cdktf.booleanToTerraform(struct!.failClosed),
    notification_settings: teamsAccountAntivirusNotificationSettingsToTerraform(struct!.notificationSettings),
  }
}


export function teamsAccountAntivirusToHclTerraform(struct?: TeamsAccountAntivirusOutputReference | TeamsAccountAntivirus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_download_phase: {
      value: cdktf.booleanToHclTerraform(struct!.enabledDownloadPhase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled_upload_phase: {
      value: cdktf.booleanToHclTerraform(struct!.enabledUploadPhase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fail_closed: {
      value: cdktf.booleanToHclTerraform(struct!.failClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notification_settings: {
      value: teamsAccountAntivirusNotificationSettingsToHclTerraform(struct!.notificationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "TeamsAccountAntivirusNotificationSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamsAccountAntivirusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsAccountAntivirus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledDownloadPhase !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledDownloadPhase = this._enabledDownloadPhase;
    }
    if (this._enabledUploadPhase !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledUploadPhase = this._enabledUploadPhase;
    }
    if (this._failClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.failClosed = this._failClosed;
    }
    if (this._notificationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationSettings = this._notificationSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsAccountAntivirus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabledDownloadPhase = undefined;
      this._enabledUploadPhase = undefined;
      this._failClosed = undefined;
      this._notificationSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabledDownloadPhase = value.enabledDownloadPhase;
      this._enabledUploadPhase = value.enabledUploadPhase;
      this._failClosed = value.failClosed;
      this._notificationSettings.internalValue = value.notificationSettings;
    }
  }

  // enabled_download_phase - computed: false, optional: false, required: true
  private _enabledDownloadPhase?: boolean | cdktf.IResolvable; 
  public get enabledDownloadPhase() {
    return this.getBooleanAttribute('enabled_download_phase');
  }
  public set enabledDownloadPhase(value: boolean | cdktf.IResolvable) {
    this._enabledDownloadPhase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledDownloadPhaseInput() {
    return this._enabledDownloadPhase;
  }

  // enabled_upload_phase - computed: false, optional: false, required: true
  private _enabledUploadPhase?: boolean | cdktf.IResolvable; 
  public get enabledUploadPhase() {
    return this.getBooleanAttribute('enabled_upload_phase');
  }
  public set enabledUploadPhase(value: boolean | cdktf.IResolvable) {
    this._enabledUploadPhase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledUploadPhaseInput() {
    return this._enabledUploadPhase;
  }

  // fail_closed - computed: false, optional: false, required: true
  private _failClosed?: boolean | cdktf.IResolvable; 
  public get failClosed() {
    return this.getBooleanAttribute('fail_closed');
  }
  public set failClosed(value: boolean | cdktf.IResolvable) {
    this._failClosed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failClosedInput() {
    return this._failClosed;
  }

  // notification_settings - computed: false, optional: true, required: false
  private _notificationSettings = new TeamsAccountAntivirusNotificationSettingsOutputReference(this, "notification_settings");
  public get notificationSettings() {
    return this._notificationSettings;
  }
  public putNotificationSettings(value: TeamsAccountAntivirusNotificationSettings) {
    this._notificationSettings.internalValue = value;
  }
  public resetNotificationSettings() {
    this._notificationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSettingsInput() {
    return this._notificationSettings.internalValue;
  }
}
export interface TeamsAccountBlockPage {
  /**
  * Hex code of block page background color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#background_color TeamsAccount#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * Indicator of enablement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#enabled TeamsAccount#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Block page footer text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#footer_text TeamsAccount#footer_text}
  */
  readonly footerText?: string;
  /**
  * Block page header text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#header_text TeamsAccount#header_text}
  */
  readonly headerText?: string;
  /**
  * URL of block page logo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#logo_path TeamsAccount#logo_path}
  */
  readonly logoPath?: string;
  /**
  * Admin email for users to contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#mailto_address TeamsAccount#mailto_address}
  */
  readonly mailtoAddress?: string;
  /**
  * Subject line for emails created from block page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#mailto_subject TeamsAccount#mailto_subject}
  */
  readonly mailtoSubject?: string;
  /**
  * Name of block page configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#name TeamsAccount#name}
  */
  readonly name?: string;
}

export function teamsAccountBlockPageToTerraform(struct?: TeamsAccountBlockPageOutputReference | TeamsAccountBlockPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    footer_text: cdktf.stringToTerraform(struct!.footerText),
    header_text: cdktf.stringToTerraform(struct!.headerText),
    logo_path: cdktf.stringToTerraform(struct!.logoPath),
    mailto_address: cdktf.stringToTerraform(struct!.mailtoAddress),
    mailto_subject: cdktf.stringToTerraform(struct!.mailtoSubject),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function teamsAccountBlockPageToHclTerraform(struct?: TeamsAccountBlockPageOutputReference | TeamsAccountBlockPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    background_color: {
      value: cdktf.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    footer_text: {
      value: cdktf.stringToHclTerraform(struct!.footerText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_text: {
      value: cdktf.stringToHclTerraform(struct!.headerText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logo_path: {
      value: cdktf.stringToHclTerraform(struct!.logoPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mailto_address: {
      value: cdktf.stringToHclTerraform(struct!.mailtoAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mailto_subject: {
      value: cdktf.stringToHclTerraform(struct!.mailtoSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamsAccountBlockPageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsAccountBlockPage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._footerText !== undefined) {
      hasAnyValues = true;
      internalValueResult.footerText = this._footerText;
    }
    if (this._headerText !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerText = this._headerText;
    }
    if (this._logoPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoPath = this._logoPath;
    }
    if (this._mailtoAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailtoAddress = this._mailtoAddress;
    }
    if (this._mailtoSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailtoSubject = this._mailtoSubject;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsAccountBlockPage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backgroundColor = undefined;
      this._enabled = undefined;
      this._footerText = undefined;
      this._headerText = undefined;
      this._logoPath = undefined;
      this._mailtoAddress = undefined;
      this._mailtoSubject = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backgroundColor = value.backgroundColor;
      this._enabled = value.enabled;
      this._footerText = value.footerText;
      this._headerText = value.headerText;
      this._logoPath = value.logoPath;
      this._mailtoAddress = value.mailtoAddress;
      this._mailtoSubject = value.mailtoSubject;
      this._name = value.name;
    }
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // footer_text - computed: false, optional: true, required: false
  private _footerText?: string; 
  public get footerText() {
    return this.getStringAttribute('footer_text');
  }
  public set footerText(value: string) {
    this._footerText = value;
  }
  public resetFooterText() {
    this._footerText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get footerTextInput() {
    return this._footerText;
  }

  // header_text - computed: false, optional: true, required: false
  private _headerText?: string; 
  public get headerText() {
    return this.getStringAttribute('header_text');
  }
  public set headerText(value: string) {
    this._headerText = value;
  }
  public resetHeaderText() {
    this._headerText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerTextInput() {
    return this._headerText;
  }

  // logo_path - computed: false, optional: true, required: false
  private _logoPath?: string; 
  public get logoPath() {
    return this.getStringAttribute('logo_path');
  }
  public set logoPath(value: string) {
    this._logoPath = value;
  }
  public resetLogoPath() {
    this._logoPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoPathInput() {
    return this._logoPath;
  }

  // mailto_address - computed: false, optional: true, required: false
  private _mailtoAddress?: string; 
  public get mailtoAddress() {
    return this.getStringAttribute('mailto_address');
  }
  public set mailtoAddress(value: string) {
    this._mailtoAddress = value;
  }
  public resetMailtoAddress() {
    this._mailtoAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailtoAddressInput() {
    return this._mailtoAddress;
  }

  // mailto_subject - computed: false, optional: true, required: false
  private _mailtoSubject?: string; 
  public get mailtoSubject() {
    return this.getStringAttribute('mailto_subject');
  }
  public set mailtoSubject(value: string) {
    this._mailtoSubject = value;
  }
  public resetMailtoSubject() {
    this._mailtoSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailtoSubjectInput() {
    return this._mailtoSubject;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface TeamsAccountBodyScanning {
  /**
  * Body scanning inspection mode. Available values: `deep`, `shallow`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#inspection_mode TeamsAccount#inspection_mode}
  */
  readonly inspectionMode: string;
}

export function teamsAccountBodyScanningToTerraform(struct?: TeamsAccountBodyScanningOutputReference | TeamsAccountBodyScanning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inspection_mode: cdktf.stringToTerraform(struct!.inspectionMode),
  }
}


export function teamsAccountBodyScanningToHclTerraform(struct?: TeamsAccountBodyScanningOutputReference | TeamsAccountBodyScanning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inspection_mode: {
      value: cdktf.stringToHclTerraform(struct!.inspectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamsAccountBodyScanningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsAccountBodyScanning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inspectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectionMode = this._inspectionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsAccountBodyScanning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inspectionMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inspectionMode = value.inspectionMode;
    }
  }

  // inspection_mode - computed: false, optional: false, required: true
  private _inspectionMode?: string; 
  public get inspectionMode() {
    return this.getStringAttribute('inspection_mode');
  }
  public set inspectionMode(value: string) {
    this._inspectionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionModeInput() {
    return this._inspectionMode;
  }
}
export interface TeamsAccountCustomCertificate {
  /**
  * Whether TLS encryption should use a custom certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#enabled TeamsAccount#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * ID of custom certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#id TeamsAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function teamsAccountCustomCertificateToTerraform(struct?: TeamsAccountCustomCertificateOutputReference | TeamsAccountCustomCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function teamsAccountCustomCertificateToHclTerraform(struct?: TeamsAccountCustomCertificateOutputReference | TeamsAccountCustomCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamsAccountCustomCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsAccountCustomCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsAccountCustomCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._id = value.id;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface TeamsAccountExtendedEmailMatching {
  /**
  * Whether e-mails should be matched on all variants of user emails (with + or . modifiers) in Firewall policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#enabled TeamsAccount#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function teamsAccountExtendedEmailMatchingToTerraform(struct?: TeamsAccountExtendedEmailMatchingOutputReference | TeamsAccountExtendedEmailMatching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function teamsAccountExtendedEmailMatchingToHclTerraform(struct?: TeamsAccountExtendedEmailMatchingOutputReference | TeamsAccountExtendedEmailMatching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamsAccountExtendedEmailMatchingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsAccountExtendedEmailMatching | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsAccountExtendedEmailMatching | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface TeamsAccountFips {
  /**
  * Only allow FIPS-compliant TLS configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#tls TeamsAccount#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
}

export function teamsAccountFipsToTerraform(struct?: TeamsAccountFipsOutputReference | TeamsAccountFips): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls: cdktf.booleanToTerraform(struct!.tls),
  }
}


export function teamsAccountFipsToHclTerraform(struct?: TeamsAccountFipsOutputReference | TeamsAccountFips): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamsAccountFipsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsAccountFips | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsAccountFips | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tls = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tls = value.tls;
    }
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }
}
export interface TeamsAccountLoggingSettingsByRuleTypeDns {
  /**
  * Whether to log all activity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#log_all TeamsAccount#log_all}
  */
  readonly logAll: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}
  */
  readonly logBlocks: boolean | cdktf.IResolvable;
}

export function teamsAccountLoggingSettingsByRuleTypeDnsToTerraform(struct?: TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference | TeamsAccountLoggingSettingsByRuleTypeDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_all: cdktf.booleanToTerraform(struct!.logAll),
    log_blocks: cdktf.booleanToTerraform(struct!.logBlocks),
  }
}


export function teamsAccountLoggingSettingsByRuleTypeDnsToHclTerraform(struct?: TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference | TeamsAccountLoggingSettingsByRuleTypeDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_all: {
      value: cdktf.booleanToHclTerraform(struct!.logAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_blocks: {
      value: cdktf.booleanToHclTerraform(struct!.logBlocks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsAccountLoggingSettingsByRuleTypeDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAll = this._logAll;
    }
    if (this._logBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.logBlocks = this._logBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsAccountLoggingSettingsByRuleTypeDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logAll = undefined;
      this._logBlocks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logAll = value.logAll;
      this._logBlocks = value.logBlocks;
    }
  }

  // log_all - computed: false, optional: false, required: true
  private _logAll?: boolean | cdktf.IResolvable; 
  public get logAll() {
    return this.getBooleanAttribute('log_all');
  }
  public set logAll(value: boolean | cdktf.IResolvable) {
    this._logAll = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAllInput() {
    return this._logAll;
  }

  // log_blocks - computed: false, optional: false, required: true
  private _logBlocks?: boolean | cdktf.IResolvable; 
  public get logBlocks() {
    return this.getBooleanAttribute('log_blocks');
  }
  public set logBlocks(value: boolean | cdktf.IResolvable) {
    this._logBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logBlocksInput() {
    return this._logBlocks;
  }
}
export interface TeamsAccountLoggingSettingsByRuleTypeHttp {
  /**
  * Whether to log all activity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#log_all TeamsAccount#log_all}
  */
  readonly logAll: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}
  */
  readonly logBlocks: boolean | cdktf.IResolvable;
}

export function teamsAccountLoggingSettingsByRuleTypeHttpToTerraform(struct?: TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference | TeamsAccountLoggingSettingsByRuleTypeHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_all: cdktf.booleanToTerraform(struct!.logAll),
    log_blocks: cdktf.booleanToTerraform(struct!.logBlocks),
  }
}


export function teamsAccountLoggingSettingsByRuleTypeHttpToHclTerraform(struct?: TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference | TeamsAccountLoggingSettingsByRuleTypeHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_all: {
      value: cdktf.booleanToHclTerraform(struct!.logAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_blocks: {
      value: cdktf.booleanToHclTerraform(struct!.logBlocks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsAccountLoggingSettingsByRuleTypeHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAll = this._logAll;
    }
    if (this._logBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.logBlocks = this._logBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsAccountLoggingSettingsByRuleTypeHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logAll = undefined;
      this._logBlocks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logAll = value.logAll;
      this._logBlocks = value.logBlocks;
    }
  }

  // log_all - computed: false, optional: false, required: true
  private _logAll?: boolean | cdktf.IResolvable; 
  public get logAll() {
    return this.getBooleanAttribute('log_all');
  }
  public set logAll(value: boolean | cdktf.IResolvable) {
    this._logAll = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAllInput() {
    return this._logAll;
  }

  // log_blocks - computed: false, optional: false, required: true
  private _logBlocks?: boolean | cdktf.IResolvable; 
  public get logBlocks() {
    return this.getBooleanAttribute('log_blocks');
  }
  public set logBlocks(value: boolean | cdktf.IResolvable) {
    this._logBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logBlocksInput() {
    return this._logBlocks;
  }
}
export interface TeamsAccountLoggingSettingsByRuleTypeL4 {
  /**
  * Whether to log all activity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#log_all TeamsAccount#log_all}
  */
  readonly logAll: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}
  */
  readonly logBlocks: boolean | cdktf.IResolvable;
}

export function teamsAccountLoggingSettingsByRuleTypeL4ToTerraform(struct?: TeamsAccountLoggingSettingsByRuleTypeL4OutputReference | TeamsAccountLoggingSettingsByRuleTypeL4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_all: cdktf.booleanToTerraform(struct!.logAll),
    log_blocks: cdktf.booleanToTerraform(struct!.logBlocks),
  }
}


export function teamsAccountLoggingSettingsByRuleTypeL4ToHclTerraform(struct?: TeamsAccountLoggingSettingsByRuleTypeL4OutputReference | TeamsAccountLoggingSettingsByRuleTypeL4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_all: {
      value: cdktf.booleanToHclTerraform(struct!.logAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_blocks: {
      value: cdktf.booleanToHclTerraform(struct!.logBlocks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamsAccountLoggingSettingsByRuleTypeL4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsAccountLoggingSettingsByRuleTypeL4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAll = this._logAll;
    }
    if (this._logBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.logBlocks = this._logBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsAccountLoggingSettingsByRuleTypeL4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logAll = undefined;
      this._logBlocks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logAll = value.logAll;
      this._logBlocks = value.logBlocks;
    }
  }

  // log_all - computed: false, optional: false, required: true
  private _logAll?: boolean | cdktf.IResolvable; 
  public get logAll() {
    return this.getBooleanAttribute('log_all');
  }
  public set logAll(value: boolean | cdktf.IResolvable) {
    this._logAll = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAllInput() {
    return this._logAll;
  }

  // log_blocks - computed: false, optional: false, required: true
  private _logBlocks?: boolean | cdktf.IResolvable; 
  public get logBlocks() {
    return this.getBooleanAttribute('log_blocks');
  }
  public set logBlocks(value: boolean | cdktf.IResolvable) {
    this._logBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logBlocksInput() {
    return this._logBlocks;
  }
}
export interface TeamsAccountLoggingSettingsByRuleType {
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#dns TeamsAccount#dns}
  */
  readonly dns: TeamsAccountLoggingSettingsByRuleTypeDns;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#http TeamsAccount#http}
  */
  readonly http: TeamsAccountLoggingSettingsByRuleTypeHttp;
  /**
  * l4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#l4 TeamsAccount#l4}
  */
  readonly l4: TeamsAccountLoggingSettingsByRuleTypeL4;
}

export function teamsAccountLoggingSettingsByRuleTypeToTerraform(struct?: TeamsAccountLoggingSettingsByRuleTypeOutputReference | TeamsAccountLoggingSettingsByRuleType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: teamsAccountLoggingSettingsByRuleTypeDnsToTerraform(struct!.dns),
    http: teamsAccountLoggingSettingsByRuleTypeHttpToTerraform(struct!.http),
    l4: teamsAccountLoggingSettingsByRuleTypeL4ToTerraform(struct!.l4),
  }
}


export function teamsAccountLoggingSettingsByRuleTypeToHclTerraform(struct?: TeamsAccountLoggingSettingsByRuleTypeOutputReference | TeamsAccountLoggingSettingsByRuleType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: teamsAccountLoggingSettingsByRuleTypeDnsToHclTerraform(struct!.dns),
      isBlock: true,
      type: "list",
      storageClassType: "TeamsAccountLoggingSettingsByRuleTypeDnsList",
    },
    http: {
      value: teamsAccountLoggingSettingsByRuleTypeHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "TeamsAccountLoggingSettingsByRuleTypeHttpList",
    },
    l4: {
      value: teamsAccountLoggingSettingsByRuleTypeL4ToHclTerraform(struct!.l4),
      isBlock: true,
      type: "list",
      storageClassType: "TeamsAccountLoggingSettingsByRuleTypeL4List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamsAccountLoggingSettingsByRuleTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsAccountLoggingSettingsByRuleType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._l4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4 = this._l4?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsAccountLoggingSettingsByRuleType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns.internalValue = undefined;
      this._http.internalValue = undefined;
      this._l4.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns.internalValue = value.dns;
      this._http.internalValue = value.http;
      this._l4.internalValue = value.l4;
    }
  }

  // dns - computed: false, optional: false, required: true
  private _dns = new TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: TeamsAccountLoggingSettingsByRuleTypeDns) {
    this._dns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // http - computed: false, optional: false, required: true
  private _http = new TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: TeamsAccountLoggingSettingsByRuleTypeHttp) {
    this._http.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // l4 - computed: false, optional: false, required: true
  private _l4 = new TeamsAccountLoggingSettingsByRuleTypeL4OutputReference(this, "l4");
  public get l4() {
    return this._l4;
  }
  public putL4(value: TeamsAccountLoggingSettingsByRuleTypeL4) {
    this._l4.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l4Input() {
    return this._l4.internalValue;
  }
}
export interface TeamsAccountLogging {
  /**
  * Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#redact_pii TeamsAccount#redact_pii}
  */
  readonly redactPii: boolean | cdktf.IResolvable;
  /**
  * settings_by_rule_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#settings_by_rule_type TeamsAccount#settings_by_rule_type}
  */
  readonly settingsByRuleType: TeamsAccountLoggingSettingsByRuleType;
}

export function teamsAccountLoggingToTerraform(struct?: TeamsAccountLoggingOutputReference | TeamsAccountLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redact_pii: cdktf.booleanToTerraform(struct!.redactPii),
    settings_by_rule_type: teamsAccountLoggingSettingsByRuleTypeToTerraform(struct!.settingsByRuleType),
  }
}


export function teamsAccountLoggingToHclTerraform(struct?: TeamsAccountLoggingOutputReference | TeamsAccountLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    redact_pii: {
      value: cdktf.booleanToHclTerraform(struct!.redactPii),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    settings_by_rule_type: {
      value: teamsAccountLoggingSettingsByRuleTypeToHclTerraform(struct!.settingsByRuleType),
      isBlock: true,
      type: "list",
      storageClassType: "TeamsAccountLoggingSettingsByRuleTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamsAccountLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsAccountLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redactPii !== undefined) {
      hasAnyValues = true;
      internalValueResult.redactPii = this._redactPii;
    }
    if (this._settingsByRuleType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settingsByRuleType = this._settingsByRuleType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsAccountLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._redactPii = undefined;
      this._settingsByRuleType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._redactPii = value.redactPii;
      this._settingsByRuleType.internalValue = value.settingsByRuleType;
    }
  }

  // redact_pii - computed: false, optional: false, required: true
  private _redactPii?: boolean | cdktf.IResolvable; 
  public get redactPii() {
    return this.getBooleanAttribute('redact_pii');
  }
  public set redactPii(value: boolean | cdktf.IResolvable) {
    this._redactPii = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redactPiiInput() {
    return this._redactPii;
  }

  // settings_by_rule_type - computed: false, optional: false, required: true
  private _settingsByRuleType = new TeamsAccountLoggingSettingsByRuleTypeOutputReference(this, "settings_by_rule_type");
  public get settingsByRuleType() {
    return this._settingsByRuleType;
  }
  public putSettingsByRuleType(value: TeamsAccountLoggingSettingsByRuleType) {
    this._settingsByRuleType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsByRuleTypeInput() {
    return this._settingsByRuleType.internalValue;
  }
}
export interface TeamsAccountPayloadLog {
  /**
  * Public key used to encrypt matched payloads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#public_key TeamsAccount#public_key}
  */
  readonly publicKey: string;
}

export function teamsAccountPayloadLogToTerraform(struct?: TeamsAccountPayloadLogOutputReference | TeamsAccountPayloadLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_key: cdktf.stringToTerraform(struct!.publicKey),
  }
}


export function teamsAccountPayloadLogToHclTerraform(struct?: TeamsAccountPayloadLogOutputReference | TeamsAccountPayloadLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamsAccountPayloadLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsAccountPayloadLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsAccountPayloadLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicKey = value.publicKey;
    }
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }
}
export interface TeamsAccountProxy {
  /**
  * Whether root ca is enabled account wide for ZT clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#root_ca TeamsAccount#root_ca}
  */
  readonly rootCa: boolean | cdktf.IResolvable;
  /**
  * Whether gateway proxy is enabled on gateway devices for TCP traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#tcp TeamsAccount#tcp}
  */
  readonly tcp: boolean | cdktf.IResolvable;
  /**
  * Whether gateway proxy is enabled on gateway devices for UDP traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#udp TeamsAccount#udp}
  */
  readonly udp: boolean | cdktf.IResolvable;
}

export function teamsAccountProxyToTerraform(struct?: TeamsAccountProxyOutputReference | TeamsAccountProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    root_ca: cdktf.booleanToTerraform(struct!.rootCa),
    tcp: cdktf.booleanToTerraform(struct!.tcp),
    udp: cdktf.booleanToTerraform(struct!.udp),
  }
}


export function teamsAccountProxyToHclTerraform(struct?: TeamsAccountProxyOutputReference | TeamsAccountProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    root_ca: {
      value: cdktf.booleanToHclTerraform(struct!.rootCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tcp: {
      value: cdktf.booleanToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    udp: {
      value: cdktf.booleanToHclTerraform(struct!.udp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamsAccountProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsAccountProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rootCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootCa = this._rootCa;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsAccountProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rootCa = undefined;
      this._tcp = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rootCa = value.rootCa;
      this._tcp = value.tcp;
      this._udp = value.udp;
    }
  }

  // root_ca - computed: false, optional: false, required: true
  private _rootCa?: boolean | cdktf.IResolvable; 
  public get rootCa() {
    return this.getBooleanAttribute('root_ca');
  }
  public set rootCa(value: boolean | cdktf.IResolvable) {
    this._rootCa = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCaInput() {
    return this._rootCa;
  }

  // tcp - computed: false, optional: false, required: true
  private _tcp?: boolean | cdktf.IResolvable; 
  public get tcp() {
    return this.getBooleanAttribute('tcp');
  }
  public set tcp(value: boolean | cdktf.IResolvable) {
    this._tcp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // udp - computed: false, optional: false, required: true
  private _udp?: boolean | cdktf.IResolvable; 
  public get udp() {
    return this.getBooleanAttribute('udp');
  }
  public set udp(value: boolean | cdktf.IResolvable) {
    this._udp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }
}
export interface TeamsAccountSshSessionLog {
  /**
  * Public key used to encrypt ssh session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#public_key TeamsAccount#public_key}
  */
  readonly publicKey: string;
}

export function teamsAccountSshSessionLogToTerraform(struct?: TeamsAccountSshSessionLogOutputReference | TeamsAccountSshSessionLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_key: cdktf.stringToTerraform(struct!.publicKey),
  }
}


export function teamsAccountSshSessionLogToHclTerraform(struct?: TeamsAccountSshSessionLogOutputReference | TeamsAccountSshSessionLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamsAccountSshSessionLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamsAccountSshSessionLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamsAccountSshSessionLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicKey = value.publicKey;
    }
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account cloudflare_teams_account}
*/
export class TeamsAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_teams_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeamsAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamsAccount to import
  * @param importFromId The id of the existing TeamsAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamsAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_teams_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/teams_account cloudflare_teams_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamsAccountConfig
  */
  public constructor(scope: Construct, id: string, config: TeamsAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_teams_account',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.34.0',
        providerVersionConstraint: '~> 4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._activityLogEnabled = config.activityLogEnabled;
    this._id = config.id;
    this._nonIdentityBrowserIsolationEnabled = config.nonIdentityBrowserIsolationEnabled;
    this._protocolDetectionEnabled = config.protocolDetectionEnabled;
    this._tlsDecryptEnabled = config.tlsDecryptEnabled;
    this._urlBrowserIsolationEnabled = config.urlBrowserIsolationEnabled;
    this._antivirus.internalValue = config.antivirus;
    this._blockPage.internalValue = config.blockPage;
    this._bodyScanning.internalValue = config.bodyScanning;
    this._customCertificate.internalValue = config.customCertificate;
    this._extendedEmailMatching.internalValue = config.extendedEmailMatching;
    this._fips.internalValue = config.fips;
    this._logging.internalValue = config.logging;
    this._payloadLog.internalValue = config.payloadLog;
    this._proxy.internalValue = config.proxy;
    this._sshSessionLog.internalValue = config.sshSessionLog;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // activity_log_enabled - computed: false, optional: true, required: false
  private _activityLogEnabled?: boolean | cdktf.IResolvable; 
  public get activityLogEnabled() {
    return this.getBooleanAttribute('activity_log_enabled');
  }
  public set activityLogEnabled(value: boolean | cdktf.IResolvable) {
    this._activityLogEnabled = value;
  }
  public resetActivityLogEnabled() {
    this._activityLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activityLogEnabledInput() {
    return this._activityLogEnabled;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // non_identity_browser_isolation_enabled - computed: false, optional: true, required: false
  private _nonIdentityBrowserIsolationEnabled?: boolean | cdktf.IResolvable; 
  public get nonIdentityBrowserIsolationEnabled() {
    return this.getBooleanAttribute('non_identity_browser_isolation_enabled');
  }
  public set nonIdentityBrowserIsolationEnabled(value: boolean | cdktf.IResolvable) {
    this._nonIdentityBrowserIsolationEnabled = value;
  }
  public resetNonIdentityBrowserIsolationEnabled() {
    this._nonIdentityBrowserIsolationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonIdentityBrowserIsolationEnabledInput() {
    return this._nonIdentityBrowserIsolationEnabled;
  }

  // protocol_detection_enabled - computed: false, optional: true, required: false
  private _protocolDetectionEnabled?: boolean | cdktf.IResolvable; 
  public get protocolDetectionEnabled() {
    return this.getBooleanAttribute('protocol_detection_enabled');
  }
  public set protocolDetectionEnabled(value: boolean | cdktf.IResolvable) {
    this._protocolDetectionEnabled = value;
  }
  public resetProtocolDetectionEnabled() {
    this._protocolDetectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolDetectionEnabledInput() {
    return this._protocolDetectionEnabled;
  }

  // tls_decrypt_enabled - computed: false, optional: true, required: false
  private _tlsDecryptEnabled?: boolean | cdktf.IResolvable; 
  public get tlsDecryptEnabled() {
    return this.getBooleanAttribute('tls_decrypt_enabled');
  }
  public set tlsDecryptEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsDecryptEnabled = value;
  }
  public resetTlsDecryptEnabled() {
    this._tlsDecryptEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsDecryptEnabledInput() {
    return this._tlsDecryptEnabled;
  }

  // url_browser_isolation_enabled - computed: false, optional: true, required: false
  private _urlBrowserIsolationEnabled?: boolean | cdktf.IResolvable; 
  public get urlBrowserIsolationEnabled() {
    return this.getBooleanAttribute('url_browser_isolation_enabled');
  }
  public set urlBrowserIsolationEnabled(value: boolean | cdktf.IResolvable) {
    this._urlBrowserIsolationEnabled = value;
  }
  public resetUrlBrowserIsolationEnabled() {
    this._urlBrowserIsolationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlBrowserIsolationEnabledInput() {
    return this._urlBrowserIsolationEnabled;
  }

  // antivirus - computed: false, optional: true, required: false
  private _antivirus = new TeamsAccountAntivirusOutputReference(this, "antivirus");
  public get antivirus() {
    return this._antivirus;
  }
  public putAntivirus(value: TeamsAccountAntivirus) {
    this._antivirus.internalValue = value;
  }
  public resetAntivirus() {
    this._antivirus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antivirusInput() {
    return this._antivirus.internalValue;
  }

  // block_page - computed: false, optional: true, required: false
  private _blockPage = new TeamsAccountBlockPageOutputReference(this, "block_page");
  public get blockPage() {
    return this._blockPage;
  }
  public putBlockPage(value: TeamsAccountBlockPage) {
    this._blockPage.internalValue = value;
  }
  public resetBlockPage() {
    this._blockPage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPageInput() {
    return this._blockPage.internalValue;
  }

  // body_scanning - computed: false, optional: true, required: false
  private _bodyScanning = new TeamsAccountBodyScanningOutputReference(this, "body_scanning");
  public get bodyScanning() {
    return this._bodyScanning;
  }
  public putBodyScanning(value: TeamsAccountBodyScanning) {
    this._bodyScanning.internalValue = value;
  }
  public resetBodyScanning() {
    this._bodyScanning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyScanningInput() {
    return this._bodyScanning.internalValue;
  }

  // custom_certificate - computed: false, optional: true, required: false
  private _customCertificate = new TeamsAccountCustomCertificateOutputReference(this, "custom_certificate");
  public get customCertificate() {
    return this._customCertificate;
  }
  public putCustomCertificate(value: TeamsAccountCustomCertificate) {
    this._customCertificate.internalValue = value;
  }
  public resetCustomCertificate() {
    this._customCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCertificateInput() {
    return this._customCertificate.internalValue;
  }

  // extended_email_matching - computed: false, optional: true, required: false
  private _extendedEmailMatching = new TeamsAccountExtendedEmailMatchingOutputReference(this, "extended_email_matching");
  public get extendedEmailMatching() {
    return this._extendedEmailMatching;
  }
  public putExtendedEmailMatching(value: TeamsAccountExtendedEmailMatching) {
    this._extendedEmailMatching.internalValue = value;
  }
  public resetExtendedEmailMatching() {
    this._extendedEmailMatching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedEmailMatchingInput() {
    return this._extendedEmailMatching.internalValue;
  }

  // fips - computed: false, optional: true, required: false
  private _fips = new TeamsAccountFipsOutputReference(this, "fips");
  public get fips() {
    return this._fips;
  }
  public putFips(value: TeamsAccountFips) {
    this._fips.internalValue = value;
  }
  public resetFips() {
    this._fips.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsInput() {
    return this._fips.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new TeamsAccountLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: TeamsAccountLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // payload_log - computed: false, optional: true, required: false
  private _payloadLog = new TeamsAccountPayloadLogOutputReference(this, "payload_log");
  public get payloadLog() {
    return this._payloadLog;
  }
  public putPayloadLog(value: TeamsAccountPayloadLog) {
    this._payloadLog.internalValue = value;
  }
  public resetPayloadLog() {
    this._payloadLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadLogInput() {
    return this._payloadLog.internalValue;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new TeamsAccountProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: TeamsAccountProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // ssh_session_log - computed: false, optional: true, required: false
  private _sshSessionLog = new TeamsAccountSshSessionLogOutputReference(this, "ssh_session_log");
  public get sshSessionLog() {
    return this._sshSessionLog;
  }
  public putSshSessionLog(value: TeamsAccountSshSessionLog) {
    this._sshSessionLog.internalValue = value;
  }
  public resetSshSessionLog() {
    this._sshSessionLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshSessionLogInput() {
    return this._sshSessionLog.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      activity_log_enabled: cdktf.booleanToTerraform(this._activityLogEnabled),
      id: cdktf.stringToTerraform(this._id),
      non_identity_browser_isolation_enabled: cdktf.booleanToTerraform(this._nonIdentityBrowserIsolationEnabled),
      protocol_detection_enabled: cdktf.booleanToTerraform(this._protocolDetectionEnabled),
      tls_decrypt_enabled: cdktf.booleanToTerraform(this._tlsDecryptEnabled),
      url_browser_isolation_enabled: cdktf.booleanToTerraform(this._urlBrowserIsolationEnabled),
      antivirus: teamsAccountAntivirusToTerraform(this._antivirus.internalValue),
      block_page: teamsAccountBlockPageToTerraform(this._blockPage.internalValue),
      body_scanning: teamsAccountBodyScanningToTerraform(this._bodyScanning.internalValue),
      custom_certificate: teamsAccountCustomCertificateToTerraform(this._customCertificate.internalValue),
      extended_email_matching: teamsAccountExtendedEmailMatchingToTerraform(this._extendedEmailMatching.internalValue),
      fips: teamsAccountFipsToTerraform(this._fips.internalValue),
      logging: teamsAccountLoggingToTerraform(this._logging.internalValue),
      payload_log: teamsAccountPayloadLogToTerraform(this._payloadLog.internalValue),
      proxy: teamsAccountProxyToTerraform(this._proxy.internalValue),
      ssh_session_log: teamsAccountSshSessionLogToTerraform(this._sshSessionLog.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      activity_log_enabled: {
        value: cdktf.booleanToHclTerraform(this._activityLogEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_identity_browser_isolation_enabled: {
        value: cdktf.booleanToHclTerraform(this._nonIdentityBrowserIsolationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      protocol_detection_enabled: {
        value: cdktf.booleanToHclTerraform(this._protocolDetectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_decrypt_enabled: {
        value: cdktf.booleanToHclTerraform(this._tlsDecryptEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url_browser_isolation_enabled: {
        value: cdktf.booleanToHclTerraform(this._urlBrowserIsolationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      antivirus: {
        value: teamsAccountAntivirusToHclTerraform(this._antivirus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeamsAccountAntivirusList",
      },
      block_page: {
        value: teamsAccountBlockPageToHclTerraform(this._blockPage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeamsAccountBlockPageList",
      },
      body_scanning: {
        value: teamsAccountBodyScanningToHclTerraform(this._bodyScanning.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeamsAccountBodyScanningList",
      },
      custom_certificate: {
        value: teamsAccountCustomCertificateToHclTerraform(this._customCertificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeamsAccountCustomCertificateList",
      },
      extended_email_matching: {
        value: teamsAccountExtendedEmailMatchingToHclTerraform(this._extendedEmailMatching.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeamsAccountExtendedEmailMatchingList",
      },
      fips: {
        value: teamsAccountFipsToHclTerraform(this._fips.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeamsAccountFipsList",
      },
      logging: {
        value: teamsAccountLoggingToHclTerraform(this._logging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeamsAccountLoggingList",
      },
      payload_log: {
        value: teamsAccountPayloadLogToHclTerraform(this._payloadLog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeamsAccountPayloadLogList",
      },
      proxy: {
        value: teamsAccountProxyToHclTerraform(this._proxy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeamsAccountProxyList",
      },
      ssh_session_log: {
        value: teamsAccountSshSessionLogToHclTerraform(this._sshSessionLog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeamsAccountSshSessionLogList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
