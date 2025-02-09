/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/observatory_scheduled_test
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObservatoryScheduledTestConfig extends cdktf.TerraformMetaArguments {
  /**
  * A URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/observatory_scheduled_test#url ObservatoryScheduledTest#url}
  */
  readonly url: string;
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/observatory_scheduled_test#zone_id ObservatoryScheduledTest#zone_id}
  */
  readonly zoneId: string;
}
export interface ObservatoryScheduledTestSchedule {
}

export function observatoryScheduledTestScheduleToTerraform(struct?: ObservatoryScheduledTestSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function observatoryScheduledTestScheduleToHclTerraform(struct?: ObservatoryScheduledTestSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ObservatoryScheduledTestScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservatoryScheduledTestSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservatoryScheduledTestSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getStringAttribute('frequency');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface ObservatoryScheduledTestTestDesktopReportError {
}

export function observatoryScheduledTestTestDesktopReportErrorToTerraform(struct?: ObservatoryScheduledTestTestDesktopReportError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function observatoryScheduledTestTestDesktopReportErrorToHclTerraform(struct?: ObservatoryScheduledTestTestDesktopReportError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ObservatoryScheduledTestTestDesktopReportErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservatoryScheduledTestTestDesktopReportError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservatoryScheduledTestTestDesktopReportError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // detail - computed: true, optional: false, required: false
  public get detail() {
    return this.getStringAttribute('detail');
  }

  // final_displayed_url - computed: true, optional: false, required: false
  public get finalDisplayedUrl() {
    return this.getStringAttribute('final_displayed_url');
  }
}
export interface ObservatoryScheduledTestTestDesktopReport {
}

export function observatoryScheduledTestTestDesktopReportToTerraform(struct?: ObservatoryScheduledTestTestDesktopReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function observatoryScheduledTestTestDesktopReportToHclTerraform(struct?: ObservatoryScheduledTestTestDesktopReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ObservatoryScheduledTestTestDesktopReportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservatoryScheduledTestTestDesktopReport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservatoryScheduledTestTestDesktopReport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cls - computed: true, optional: false, required: false
  public get cls() {
    return this.getNumberAttribute('cls');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // error - computed: true, optional: false, required: false
  private _error = new ObservatoryScheduledTestTestDesktopReportErrorOutputReference(this, "error");
  public get error() {
    return this._error;
  }

  // fcp - computed: true, optional: false, required: false
  public get fcp() {
    return this.getNumberAttribute('fcp');
  }

  // json_report_url - computed: true, optional: false, required: false
  public get jsonReportUrl() {
    return this.getStringAttribute('json_report_url');
  }

  // lcp - computed: true, optional: false, required: false
  public get lcp() {
    return this.getNumberAttribute('lcp');
  }

  // performance_score - computed: true, optional: false, required: false
  public get performanceScore() {
    return this.getNumberAttribute('performance_score');
  }

  // si - computed: true, optional: false, required: false
  public get si() {
    return this.getNumberAttribute('si');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tbt - computed: true, optional: false, required: false
  public get tbt() {
    return this.getNumberAttribute('tbt');
  }

  // ttfb - computed: true, optional: false, required: false
  public get ttfb() {
    return this.getNumberAttribute('ttfb');
  }

  // tti - computed: true, optional: false, required: false
  public get tti() {
    return this.getNumberAttribute('tti');
  }
}
export interface ObservatoryScheduledTestTestMobileReportError {
}

export function observatoryScheduledTestTestMobileReportErrorToTerraform(struct?: ObservatoryScheduledTestTestMobileReportError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function observatoryScheduledTestTestMobileReportErrorToHclTerraform(struct?: ObservatoryScheduledTestTestMobileReportError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ObservatoryScheduledTestTestMobileReportErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservatoryScheduledTestTestMobileReportError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservatoryScheduledTestTestMobileReportError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // detail - computed: true, optional: false, required: false
  public get detail() {
    return this.getStringAttribute('detail');
  }

  // final_displayed_url - computed: true, optional: false, required: false
  public get finalDisplayedUrl() {
    return this.getStringAttribute('final_displayed_url');
  }
}
export interface ObservatoryScheduledTestTestMobileReport {
}

export function observatoryScheduledTestTestMobileReportToTerraform(struct?: ObservatoryScheduledTestTestMobileReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function observatoryScheduledTestTestMobileReportToHclTerraform(struct?: ObservatoryScheduledTestTestMobileReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ObservatoryScheduledTestTestMobileReportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservatoryScheduledTestTestMobileReport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservatoryScheduledTestTestMobileReport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cls - computed: true, optional: false, required: false
  public get cls() {
    return this.getNumberAttribute('cls');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // error - computed: true, optional: false, required: false
  private _error = new ObservatoryScheduledTestTestMobileReportErrorOutputReference(this, "error");
  public get error() {
    return this._error;
  }

  // fcp - computed: true, optional: false, required: false
  public get fcp() {
    return this.getNumberAttribute('fcp');
  }

  // json_report_url - computed: true, optional: false, required: false
  public get jsonReportUrl() {
    return this.getStringAttribute('json_report_url');
  }

  // lcp - computed: true, optional: false, required: false
  public get lcp() {
    return this.getNumberAttribute('lcp');
  }

  // performance_score - computed: true, optional: false, required: false
  public get performanceScore() {
    return this.getNumberAttribute('performance_score');
  }

  // si - computed: true, optional: false, required: false
  public get si() {
    return this.getNumberAttribute('si');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tbt - computed: true, optional: false, required: false
  public get tbt() {
    return this.getNumberAttribute('tbt');
  }

  // ttfb - computed: true, optional: false, required: false
  public get ttfb() {
    return this.getNumberAttribute('ttfb');
  }

  // tti - computed: true, optional: false, required: false
  public get tti() {
    return this.getNumberAttribute('tti');
  }
}
export interface ObservatoryScheduledTestTestRegion {
}

export function observatoryScheduledTestTestRegionToTerraform(struct?: ObservatoryScheduledTestTestRegion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function observatoryScheduledTestTestRegionToHclTerraform(struct?: ObservatoryScheduledTestTestRegion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ObservatoryScheduledTestTestRegionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservatoryScheduledTestTestRegion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservatoryScheduledTestTestRegion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface ObservatoryScheduledTestTest {
}

export function observatoryScheduledTestTestToTerraform(struct?: ObservatoryScheduledTestTest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function observatoryScheduledTestTestToHclTerraform(struct?: ObservatoryScheduledTestTest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ObservatoryScheduledTestTestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservatoryScheduledTestTest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservatoryScheduledTestTest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // date - computed: true, optional: false, required: false
  public get date() {
    return this.getStringAttribute('date');
  }

  // desktop_report - computed: true, optional: false, required: false
  private _desktopReport = new ObservatoryScheduledTestTestDesktopReportOutputReference(this, "desktop_report");
  public get desktopReport() {
    return this._desktopReport;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mobile_report - computed: true, optional: false, required: false
  private _mobileReport = new ObservatoryScheduledTestTestMobileReportOutputReference(this, "mobile_report");
  public get mobileReport() {
    return this._mobileReport;
  }

  // region - computed: true, optional: false, required: false
  private _region = new ObservatoryScheduledTestTestRegionOutputReference(this, "region");
  public get region() {
    return this._region;
  }

  // schedule_frequency - computed: true, optional: false, required: false
  public get scheduleFrequency() {
    return this.getStringAttribute('schedule_frequency');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/observatory_scheduled_test cloudflare_observatory_scheduled_test}
*/
export class ObservatoryScheduledTest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_observatory_scheduled_test";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObservatoryScheduledTest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObservatoryScheduledTest to import
  * @param importFromId The id of the existing ObservatoryScheduledTest that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/observatory_scheduled_test#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObservatoryScheduledTest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_observatory_scheduled_test", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/observatory_scheduled_test cloudflare_observatory_scheduled_test} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObservatoryScheduledTestConfig
  */
  public constructor(scope: Construct, id: string, config: ObservatoryScheduledTestConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_observatory_scheduled_test',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.0.0',
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
    this._url = config.url;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getStringAttribute('frequency');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new ObservatoryScheduledTestScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }

  // test - computed: true, optional: false, required: false
  private _test = new ObservatoryScheduledTestTestOutputReference(this, "test");
  public get test() {
    return this._test;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      url: cdktf.stringToTerraform(this._url),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
