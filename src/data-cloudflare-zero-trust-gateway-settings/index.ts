/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_gateway_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustGatewaySettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_gateway_settings#account_id DataCloudflareZeroTrustGatewaySettings#account_id}
  */
  readonly accountId: string;
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsActivityLog {
}

export function dataCloudflareZeroTrustGatewaySettingsSettingsActivityLogToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsActivityLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewaySettingsSettingsActivityLogToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsActivityLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewaySettingsSettingsActivityLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsActivityLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsActivityLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings {
}

export function dataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // include_context - computed: true, optional: false, required: false
  public get includeContext() {
    return this.getBooleanAttribute('include_context');
  }

  // msg - computed: true, optional: false, required: false
  public get msg() {
    return this.getStringAttribute('msg');
  }

  // support_url - computed: true, optional: false, required: false
  public get supportUrl() {
    return this.getStringAttribute('support_url');
  }
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsAntivirus {
}

export function dataCloudflareZeroTrustGatewaySettingsSettingsAntivirusToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsAntivirus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewaySettingsSettingsAntivirusToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsAntivirus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsAntivirus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsAntivirus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled_download_phase - computed: true, optional: false, required: false
  public get enabledDownloadPhase() {
    return this.getBooleanAttribute('enabled_download_phase');
  }

  // enabled_upload_phase - computed: true, optional: false, required: false
  public get enabledUploadPhase() {
    return this.getBooleanAttribute('enabled_upload_phase');
  }

  // fail_closed - computed: true, optional: false, required: false
  public get failClosed() {
    return this.getBooleanAttribute('fail_closed');
  }

  // notification_settings - computed: true, optional: false, required: false
  private _notificationSettings = new DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference(this, "notification_settings");
  public get notificationSettings() {
    return this._notificationSettings;
  }
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsBlockPage {
}

export function dataCloudflareZeroTrustGatewaySettingsSettingsBlockPageToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsBlockPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewaySettingsSettingsBlockPageToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsBlockPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsBlockPage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsBlockPage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background_color - computed: true, optional: false, required: false
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // footer_text - computed: true, optional: false, required: false
  public get footerText() {
    return this.getStringAttribute('footer_text');
  }

  // header_text - computed: true, optional: false, required: false
  public get headerText() {
    return this.getStringAttribute('header_text');
  }

  // include_context - computed: true, optional: false, required: false
  public get includeContext() {
    return this.getBooleanAttribute('include_context');
  }

  // logo_path - computed: true, optional: false, required: false
  public get logoPath() {
    return this.getStringAttribute('logo_path');
  }

  // mailto_address - computed: true, optional: false, required: false
  public get mailtoAddress() {
    return this.getStringAttribute('mailto_address');
  }

  // mailto_subject - computed: true, optional: false, required: false
  public get mailtoSubject() {
    return this.getStringAttribute('mailto_subject');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // source_account - computed: true, optional: false, required: false
  public get sourceAccount() {
    return this.getStringAttribute('source_account');
  }

  // suppress_footer - computed: true, optional: false, required: false
  public get suppressFooter() {
    return this.getBooleanAttribute('suppress_footer');
  }

  // target_uri - computed: true, optional: false, required: false
  public get targetUri() {
    return this.getStringAttribute('target_uri');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsBodyScanning {
}

export function dataCloudflareZeroTrustGatewaySettingsSettingsBodyScanningToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsBodyScanning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewaySettingsSettingsBodyScanningToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsBodyScanning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewaySettingsSettingsBodyScanningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsBodyScanning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsBodyScanning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inspection_mode - computed: true, optional: false, required: false
  public get inspectionMode() {
    return this.getStringAttribute('inspection_mode');
  }
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolation {
}

export function dataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolationToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolationToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // non_identity_enabled - computed: true, optional: false, required: false
  public get nonIdentityEnabled() {
    return this.getBooleanAttribute('non_identity_enabled');
  }

  // url_browser_isolation_enabled - computed: true, optional: false, required: false
  public get urlBrowserIsolationEnabled() {
    return this.getBooleanAttribute('url_browser_isolation_enabled');
  }
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsCertificate {
}

export function dataCloudflareZeroTrustGatewaySettingsSettingsCertificateToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewaySettingsSettingsCertificateToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewaySettingsSettingsCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificate {
}

export function dataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // binding_status - computed: true, optional: false, required: false
  public get bindingStatus() {
    return this.getStringAttribute('binding_status');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatching {
}

export function dataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatching | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatching | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // source_account - computed: true, optional: false, required: false
  public get sourceAccount() {
    return this.getStringAttribute('source_account');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsFips {
}

export function dataCloudflareZeroTrustGatewaySettingsSettingsFipsToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsFips): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewaySettingsSettingsFipsToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsFips): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewaySettingsSettingsFipsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsFips | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsFips | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tls - computed: true, optional: false, required: false
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsHostSelector {
}

export function dataCloudflareZeroTrustGatewaySettingsSettingsHostSelectorToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsHostSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewaySettingsSettingsHostSelectorToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsHostSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewaySettingsSettingsHostSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsHostSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsHostSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsInspection {
}

export function dataCloudflareZeroTrustGatewaySettingsSettingsInspectionToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsInspection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewaySettingsSettingsInspectionToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsInspection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewaySettingsSettingsInspectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsInspection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsInspection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetection {
}

export function dataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetectionToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetectionToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsSandbox {
}

export function dataCloudflareZeroTrustGatewaySettingsSettingsSandboxToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsSandbox): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewaySettingsSettingsSandboxToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsSandbox): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewaySettingsSettingsSandboxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsSandbox | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsSandbox | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // fallback_action - computed: true, optional: false, required: false
  public get fallbackAction() {
    return this.getStringAttribute('fallback_action');
  }
}
export interface DataCloudflareZeroTrustGatewaySettingsSettingsTlsDecrypt {
}

export function dataCloudflareZeroTrustGatewaySettingsSettingsTlsDecryptToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsTlsDecrypt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewaySettingsSettingsTlsDecryptToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettingsTlsDecrypt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettingsTlsDecrypt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettingsTlsDecrypt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataCloudflareZeroTrustGatewaySettingsSettings {
}

export function dataCloudflareZeroTrustGatewaySettingsSettingsToTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewaySettingsSettingsToHclTerraform(struct?: DataCloudflareZeroTrustGatewaySettingsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewaySettingsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewaySettingsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activity_log - computed: true, optional: false, required: false
  private _activityLog = new DataCloudflareZeroTrustGatewaySettingsSettingsActivityLogOutputReference(this, "activity_log");
  public get activityLog() {
    return this._activityLog;
  }

  // antivirus - computed: true, optional: false, required: false
  private _antivirus = new DataCloudflareZeroTrustGatewaySettingsSettingsAntivirusOutputReference(this, "antivirus");
  public get antivirus() {
    return this._antivirus;
  }

  // block_page - computed: true, optional: false, required: false
  private _blockPage = new DataCloudflareZeroTrustGatewaySettingsSettingsBlockPageOutputReference(this, "block_page");
  public get blockPage() {
    return this._blockPage;
  }

  // body_scanning - computed: true, optional: false, required: false
  private _bodyScanning = new DataCloudflareZeroTrustGatewaySettingsSettingsBodyScanningOutputReference(this, "body_scanning");
  public get bodyScanning() {
    return this._bodyScanning;
  }

  // browser_isolation - computed: true, optional: false, required: false
  private _browserIsolation = new DataCloudflareZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference(this, "browser_isolation");
  public get browserIsolation() {
    return this._browserIsolation;
  }

  // certificate - computed: true, optional: false, required: false
  private _certificate = new DataCloudflareZeroTrustGatewaySettingsSettingsCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }

  // custom_certificate - computed: true, optional: false, required: false
  private _customCertificate = new DataCloudflareZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference(this, "custom_certificate");
  public get customCertificate() {
    return this._customCertificate;
  }

  // extended_email_matching - computed: true, optional: false, required: false
  private _extendedEmailMatching = new DataCloudflareZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference(this, "extended_email_matching");
  public get extendedEmailMatching() {
    return this._extendedEmailMatching;
  }

  // fips - computed: true, optional: false, required: false
  private _fips = new DataCloudflareZeroTrustGatewaySettingsSettingsFipsOutputReference(this, "fips");
  public get fips() {
    return this._fips;
  }

  // host_selector - computed: true, optional: false, required: false
  private _hostSelector = new DataCloudflareZeroTrustGatewaySettingsSettingsHostSelectorOutputReference(this, "host_selector");
  public get hostSelector() {
    return this._hostSelector;
  }

  // inspection - computed: true, optional: false, required: false
  private _inspection = new DataCloudflareZeroTrustGatewaySettingsSettingsInspectionOutputReference(this, "inspection");
  public get inspection() {
    return this._inspection;
  }

  // protocol_detection - computed: true, optional: false, required: false
  private _protocolDetection = new DataCloudflareZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference(this, "protocol_detection");
  public get protocolDetection() {
    return this._protocolDetection;
  }

  // sandbox - computed: true, optional: false, required: false
  private _sandbox = new DataCloudflareZeroTrustGatewaySettingsSettingsSandboxOutputReference(this, "sandbox");
  public get sandbox() {
    return this._sandbox;
  }

  // tls_decrypt - computed: true, optional: false, required: false
  private _tlsDecrypt = new DataCloudflareZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference(this, "tls_decrypt");
  public get tlsDecrypt() {
    return this._tlsDecrypt;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_gateway_settings cloudflare_zero_trust_gateway_settings}
*/
export class DataCloudflareZeroTrustGatewaySettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_gateway_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustGatewaySettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustGatewaySettings to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustGatewaySettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_gateway_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustGatewaySettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_gateway_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_gateway_settings cloudflare_zero_trust_gateway_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustGatewaySettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustGatewaySettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_gateway_settings',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.11.0',
        providerVersionConstraint: '~> 5.0'
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // settings - computed: true, optional: false, required: false
  private _settings = new DataCloudflareZeroTrustGatewaySettingsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
