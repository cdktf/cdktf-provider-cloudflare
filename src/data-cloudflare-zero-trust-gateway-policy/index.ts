/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zero_trust_gateway_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustGatewayPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zero_trust_gateway_policy#account_id DataCloudflareZeroTrustGatewayPolicy#account_id}
  */
  readonly accountId: string;
  /**
  * The API resource UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zero_trust_gateway_policy#rule_id DataCloudflareZeroTrustGatewayPolicy#rule_id}
  */
  readonly ruleId?: string;
}
export interface DataCloudflareZeroTrustGatewayPolicyExpiration {
}

export function dataCloudflareZeroTrustGatewayPolicyExpirationToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyExpiration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPolicyExpirationToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyExpiration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPolicyExpirationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPolicyExpiration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPolicyExpiration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // expired - computed: true, optional: false, required: false
  public get expired() {
    return this.getBooleanAttribute('expired');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSsh {
}

export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command_logging - computed: true, optional: false, required: false
  public get commandLogging() {
    return this.getBooleanAttribute('command_logging');
  }
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControls {
}

export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // copy - computed: true, optional: false, required: false
  public get copy() {
    return this.getStringAttribute('copy');
  }

  // dcp - computed: true, optional: false, required: false
  public get dcp() {
    return this.getBooleanAttribute('dcp');
  }

  // dd - computed: true, optional: false, required: false
  public get dd() {
    return this.getBooleanAttribute('dd');
  }

  // dk - computed: true, optional: false, required: false
  public get dk() {
    return this.getBooleanAttribute('dk');
  }

  // download - computed: true, optional: false, required: false
  public get download() {
    return this.getStringAttribute('download');
  }

  // dp - computed: true, optional: false, required: false
  public get dp() {
    return this.getBooleanAttribute('dp');
  }

  // du - computed: true, optional: false, required: false
  public get du() {
    return this.getBooleanAttribute('du');
  }

  // keyboard - computed: true, optional: false, required: false
  public get keyboard() {
    return this.getStringAttribute('keyboard');
  }

  // paste - computed: true, optional: false, required: false
  public get paste() {
    return this.getStringAttribute('paste');
  }

  // printing - computed: true, optional: false, required: false
  public get printing() {
    return this.getStringAttribute('printing');
  }

  // upload - computed: true, optional: false, required: false
  public get upload() {
    return this.getStringAttribute('upload');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPage {
}

export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include_context - computed: true, optional: false, required: false
  public get includeContext() {
    return this.getBooleanAttribute('include_context');
  }

  // target_uri - computed: true, optional: false, required: false
  public get targetUri() {
    return this.getStringAttribute('target_uri');
  }
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSession {
}

export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSession): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSession): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSession | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSession | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // enforce - computed: true, optional: false, required: false
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4 {
}

export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4ToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // route_through_private_network - computed: true, optional: false, required: false
  public get routeThroughPrivateNetwork() {
    return this.getBooleanAttribute('route_through_private_network');
  }

  // vnet_id - computed: true, optional: false, required: false
  public get vnetId() {
    return this.getStringAttribute('vnet_id');
  }
}

export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference {
    return new DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6 {
}

export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6ToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // route_through_private_network - computed: true, optional: false, required: false
  public get routeThroughPrivateNetwork() {
    return this.getBooleanAttribute('route_through_private_network');
  }

  // vnet_id - computed: true, optional: false, required: false
  public get vnetId() {
    return this.getStringAttribute('vnet_id');
  }
}

export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference {
    return new DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolvers {
}

export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolvers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolvers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolvers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolvers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgress {
}

export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }

  // ipv4_fallback - computed: true, optional: false, required: false
  public get ipv4Fallback() {
    return this.getStringAttribute('ipv4_fallback');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4Override {
}

export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4Override): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4Override): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4Override | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4Override | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettings {
}

export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettings | undefined) {
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
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLog {
}

export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLog | undefined) {
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
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantine {
}

export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_types - computed: true, optional: false, required: false
  public get fileTypes() {
    return this.getListAttribute('file_types');
  }
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirect {
}

export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // include_context - computed: true, optional: false, required: false
  public get includeContext() {
    return this.getBooleanAttribute('include_context');
  }

  // preserve_path_and_query - computed: true, optional: false, required: false
  public get preservePathAndQuery() {
    return this.getBooleanAttribute('preserve_path_and_query');
  }

  // target_uri - computed: true, optional: false, required: false
  public get targetUri() {
    return this.getStringAttribute('target_uri');
  }
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally {
}

export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternally | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fallback - computed: true, optional: false, required: false
  public get fallback() {
    return this.getStringAttribute('fallback');
  }

  // view_id - computed: true, optional: false, required: false
  public get viewId() {
    return this.getStringAttribute('view_id');
  }
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCert {
}

export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }
}
export interface DataCloudflareZeroTrustGatewayPolicyRuleSettings {
}

export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPolicyRuleSettingsToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicyRuleSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPolicyRuleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPolicyRuleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_headers - computed: true, optional: false, required: false
  private _addHeaders = new cdktf.StringListMap(this, "add_headers");
  public get addHeaders() {
    return this._addHeaders;
  }

  // allow_child_bypass - computed: true, optional: false, required: false
  public get allowChildBypass() {
    return this.getBooleanAttribute('allow_child_bypass');
  }

  // audit_ssh - computed: true, optional: false, required: false
  private _auditSsh = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsAuditSshOutputReference(this, "audit_ssh");
  public get auditSsh() {
    return this._auditSsh;
  }

  // biso_admin_controls - computed: true, optional: false, required: false
  private _bisoAdminControls = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsBisoAdminControlsOutputReference(this, "biso_admin_controls");
  public get bisoAdminControls() {
    return this._bisoAdminControls;
  }

  // block_page - computed: true, optional: false, required: false
  private _blockPage = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsBlockPageOutputReference(this, "block_page");
  public get blockPage() {
    return this._blockPage;
  }

  // block_page_enabled - computed: true, optional: false, required: false
  public get blockPageEnabled() {
    return this.getBooleanAttribute('block_page_enabled');
  }

  // block_reason - computed: true, optional: false, required: false
  public get blockReason() {
    return this.getStringAttribute('block_reason');
  }

  // bypass_parent_rule - computed: true, optional: false, required: false
  public get bypassParentRule() {
    return this.getBooleanAttribute('bypass_parent_rule');
  }

  // check_session - computed: true, optional: false, required: false
  private _checkSession = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsCheckSessionOutputReference(this, "check_session");
  public get checkSession() {
    return this._checkSession;
  }

  // dns_resolvers - computed: true, optional: false, required: false
  private _dnsResolvers = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsDnsResolversOutputReference(this, "dns_resolvers");
  public get dnsResolvers() {
    return this._dnsResolvers;
  }

  // egress - computed: true, optional: false, required: false
  private _egress = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsEgressOutputReference(this, "egress");
  public get egress() {
    return this._egress;
  }

  // ignore_cname_category_matches - computed: true, optional: false, required: false
  public get ignoreCnameCategoryMatches() {
    return this.getBooleanAttribute('ignore_cname_category_matches');
  }

  // insecure_disable_dnssec_validation - computed: true, optional: false, required: false
  public get insecureDisableDnssecValidation() {
    return this.getBooleanAttribute('insecure_disable_dnssec_validation');
  }

  // ip_categories - computed: true, optional: false, required: false
  public get ipCategories() {
    return this.getBooleanAttribute('ip_categories');
  }

  // ip_indicator_feeds - computed: true, optional: false, required: false
  public get ipIndicatorFeeds() {
    return this.getBooleanAttribute('ip_indicator_feeds');
  }

  // l4override - computed: true, optional: false, required: false
  private _l4Override = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsL4OverrideOutputReference(this, "l4override");
  public get l4Override() {
    return this._l4Override;
  }

  // notification_settings - computed: true, optional: false, required: false
  private _notificationSettings = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsNotificationSettingsOutputReference(this, "notification_settings");
  public get notificationSettings() {
    return this._notificationSettings;
  }

  // override_host - computed: true, optional: false, required: false
  public get overrideHost() {
    return this.getStringAttribute('override_host');
  }

  // override_ips - computed: true, optional: false, required: false
  public get overrideIps() {
    return this.getListAttribute('override_ips');
  }

  // payload_log - computed: true, optional: false, required: false
  private _payloadLog = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsPayloadLogOutputReference(this, "payload_log");
  public get payloadLog() {
    return this._payloadLog;
  }

  // quarantine - computed: true, optional: false, required: false
  private _quarantine = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsQuarantineOutputReference(this, "quarantine");
  public get quarantine() {
    return this._quarantine;
  }

  // redirect - computed: true, optional: false, required: false
  private _redirect = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }

  // resolve_dns_internally - computed: true, optional: false, required: false
  private _resolveDnsInternally = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsResolveDnsInternallyOutputReference(this, "resolve_dns_internally");
  public get resolveDnsInternally() {
    return this._resolveDnsInternally;
  }

  // resolve_dns_through_cloudflare - computed: true, optional: false, required: false
  public get resolveDnsThroughCloudflare() {
    return this.getBooleanAttribute('resolve_dns_through_cloudflare');
  }

  // untrusted_cert - computed: true, optional: false, required: false
  private _untrustedCert = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsUntrustedCertOutputReference(this, "untrusted_cert");
  public get untrustedCert() {
    return this._untrustedCert;
  }
}
export interface DataCloudflareZeroTrustGatewayPolicySchedule {
}

export function dataCloudflareZeroTrustGatewayPolicyScheduleToTerraform(struct?: DataCloudflareZeroTrustGatewayPolicySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPolicyScheduleToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPolicySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPolicyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPolicySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPolicySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fri - computed: true, optional: false, required: false
  public get fri() {
    return this.getStringAttribute('fri');
  }

  // mon - computed: true, optional: false, required: false
  public get mon() {
    return this.getStringAttribute('mon');
  }

  // sat - computed: true, optional: false, required: false
  public get sat() {
    return this.getStringAttribute('sat');
  }

  // sun - computed: true, optional: false, required: false
  public get sun() {
    return this.getStringAttribute('sun');
  }

  // thu - computed: true, optional: false, required: false
  public get thu() {
    return this.getStringAttribute('thu');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // tue - computed: true, optional: false, required: false
  public get tue() {
    return this.getStringAttribute('tue');
  }

  // wed - computed: true, optional: false, required: false
  public get wed() {
    return this.getStringAttribute('wed');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zero_trust_gateway_policy cloudflare_zero_trust_gateway_policy}
*/
export class DataCloudflareZeroTrustGatewayPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_gateway_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustGatewayPolicy to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustGatewayPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zero_trust_gateway_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustGatewayPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_gateway_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/data-sources/zero_trust_gateway_policy cloudflare_zero_trust_gateway_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustGatewayPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustGatewayPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_gateway_policy',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.10.1',
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
    this._ruleId = config.ruleId;
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

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_posture - computed: true, optional: false, required: false
  public get devicePosture() {
    return this.getStringAttribute('device_posture');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // expiration - computed: true, optional: false, required: false
  private _expiration = new DataCloudflareZeroTrustGatewayPolicyExpirationOutputReference(this, "expiration");
  public get expiration() {
    return this._expiration;
  }

  // filters - computed: true, optional: false, required: false
  public get filters() {
    return this.getListAttribute('filters');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: true, optional: false, required: false
  public get identity() {
    return this.getStringAttribute('identity');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // not_sharable - computed: true, optional: false, required: false
  public get notSharable() {
    return this.getBooleanAttribute('not_sharable');
  }

  // precedence - computed: true, optional: false, required: false
  public get precedence() {
    return this.getNumberAttribute('precedence');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // rule_id - computed: false, optional: true, required: false
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // rule_settings - computed: true, optional: false, required: false
  private _ruleSettings = new DataCloudflareZeroTrustGatewayPolicyRuleSettingsOutputReference(this, "rule_settings");
  public get ruleSettings() {
    return this._ruleSettings;
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataCloudflareZeroTrustGatewayPolicyScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }

  // source_account - computed: true, optional: false, required: false
  public get sourceAccount() {
    return this.getStringAttribute('source_account');
  }

  // traffic - computed: true, optional: false, required: false
  public get traffic() {
    return this.getStringAttribute('traffic');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // warning_status - computed: true, optional: false, required: false
  public get warningStatus() {
    return this.getStringAttribute('warning_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      rule_id: cdktf.stringToTerraform(this._ruleId),
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
      rule_id: {
        value: cdktf.stringToHclTerraform(this._ruleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
