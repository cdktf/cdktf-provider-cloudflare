/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_gateway_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustGatewayPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_gateway_policies#account_id DataCloudflareZeroTrustGatewayPolicies#account_id}
  */
  readonly accountId: string;
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_gateway_policies#max_items DataCloudflareZeroTrustGatewayPolicies#max_items}
  */
  readonly maxItems?: number;
}
export interface DataCloudflareZeroTrustGatewayPoliciesResultExpiration {
}

export function dataCloudflareZeroTrustGatewayPoliciesResultExpirationToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultExpiration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPoliciesResultExpirationToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultExpiration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultExpiration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultExpiration | undefined) {
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
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSsh {
}

export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSsh | undefined) {
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
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControls {
}

export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControls | undefined) {
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
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPage {
}

export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPage | undefined) {
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
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSession {
}

export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSession): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSession): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSession | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSession | undefined) {
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
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4 {
}

export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4ToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4ToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4 | undefined) {
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

export class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference {
    return new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6 {
}

export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6ToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6ToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6 | undefined) {
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

export class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference {
    return new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolvers {
}

export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolvers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolvers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolvers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolvers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgress {
}

export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgress | undefined) {
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
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4Override {
}

export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4Override): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4Override): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4Override | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4Override | undefined) {
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
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettings {
}

export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettings | undefined) {
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
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLog {
}

export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLog | undefined) {
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
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantine {
}

export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantine | undefined) {
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
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirect {
}

export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirect | undefined) {
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
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternally {
}

export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternally): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternally): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternally | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternally | undefined) {
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
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCert {
}

export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCert | undefined) {
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
export interface DataCloudflareZeroTrustGatewayPoliciesResultRuleSettings {
}

export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultRuleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultRuleSettings | undefined) {
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
  private _auditSsh = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsAuditSshOutputReference(this, "audit_ssh");
  public get auditSsh() {
    return this._auditSsh;
  }

  // biso_admin_controls - computed: true, optional: false, required: false
  private _bisoAdminControls = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBisoAdminControlsOutputReference(this, "biso_admin_controls");
  public get bisoAdminControls() {
    return this._bisoAdminControls;
  }

  // block_page - computed: true, optional: false, required: false
  private _blockPage = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsBlockPageOutputReference(this, "block_page");
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
  private _checkSession = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsCheckSessionOutputReference(this, "check_session");
  public get checkSession() {
    return this._checkSession;
  }

  // dns_resolvers - computed: true, optional: false, required: false
  private _dnsResolvers = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsDnsResolversOutputReference(this, "dns_resolvers");
  public get dnsResolvers() {
    return this._dnsResolvers;
  }

  // egress - computed: true, optional: false, required: false
  private _egress = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsEgressOutputReference(this, "egress");
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
  private _l4Override = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsL4OverrideOutputReference(this, "l4override");
  public get l4Override() {
    return this._l4Override;
  }

  // notification_settings - computed: true, optional: false, required: false
  private _notificationSettings = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsNotificationSettingsOutputReference(this, "notification_settings");
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
  private _payloadLog = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsPayloadLogOutputReference(this, "payload_log");
  public get payloadLog() {
    return this._payloadLog;
  }

  // quarantine - computed: true, optional: false, required: false
  private _quarantine = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsQuarantineOutputReference(this, "quarantine");
  public get quarantine() {
    return this._quarantine;
  }

  // redirect - computed: true, optional: false, required: false
  private _redirect = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }

  // resolve_dns_internally - computed: true, optional: false, required: false
  private _resolveDnsInternally = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsResolveDnsInternallyOutputReference(this, "resolve_dns_internally");
  public get resolveDnsInternally() {
    return this._resolveDnsInternally;
  }

  // resolve_dns_through_cloudflare - computed: true, optional: false, required: false
  public get resolveDnsThroughCloudflare() {
    return this.getBooleanAttribute('resolve_dns_through_cloudflare');
  }

  // untrusted_cert - computed: true, optional: false, required: false
  private _untrustedCert = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsUntrustedCertOutputReference(this, "untrusted_cert");
  public get untrustedCert() {
    return this._untrustedCert;
  }
}
export interface DataCloudflareZeroTrustGatewayPoliciesResultSchedule {
}

export function dataCloudflareZeroTrustGatewayPoliciesResultScheduleToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPoliciesResultScheduleToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResultSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResultSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResultSchedule | undefined) {
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
export interface DataCloudflareZeroTrustGatewayPoliciesResult {
}

export function dataCloudflareZeroTrustGatewayPoliciesResultToTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustGatewayPoliciesResultToHclTerraform(struct?: DataCloudflareZeroTrustGatewayPoliciesResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustGatewayPoliciesResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustGatewayPoliciesResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustGatewayPoliciesResult | undefined) {
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
  private _expiration = new DataCloudflareZeroTrustGatewayPoliciesResultExpirationOutputReference(this, "expiration");
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

  // precedence - computed: true, optional: false, required: false
  public get precedence() {
    return this.getNumberAttribute('precedence');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // rule_settings - computed: true, optional: false, required: false
  private _ruleSettings = new DataCloudflareZeroTrustGatewayPoliciesResultRuleSettingsOutputReference(this, "rule_settings");
  public get ruleSettings() {
    return this._ruleSettings;
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataCloudflareZeroTrustGatewayPoliciesResultScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }

  // sharable - computed: true, optional: false, required: false
  public get sharable() {
    return this.getBooleanAttribute('sharable');
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
}

export class DataCloudflareZeroTrustGatewayPoliciesResultList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustGatewayPoliciesResultOutputReference {
    return new DataCloudflareZeroTrustGatewayPoliciesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_gateway_policies cloudflare_zero_trust_gateway_policies}
*/
export class DataCloudflareZeroTrustGatewayPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_gateway_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustGatewayPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustGatewayPolicies to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustGatewayPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_gateway_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustGatewayPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_gateway_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_gateway_policies cloudflare_zero_trust_gateway_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustGatewayPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustGatewayPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_gateway_policies',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.14.0',
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
    this._maxItems = config.maxItems;
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

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflareZeroTrustGatewayPoliciesResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      max_items: cdktf.numberToTerraform(this._maxItems),
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
      max_items: {
        value: cdktf.numberToHclTerraform(this._maxItems),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
