# `zeroTrustDeviceDefaultProfile` Submodule <a name="`zeroTrustDeviceDefaultProfile` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDeviceDefaultProfile <a name="ZeroTrustDeviceDefaultProfile" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile cloudflare_zero_trust_device_default_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer"></a>

```typescript
import { zeroTrustDeviceDefaultProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile(scope: Construct, id: string, config: ZeroTrustDeviceDefaultProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig">ZeroTrustDeviceDefaultProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig">ZeroTrustDeviceDefaultProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putExclude">putExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putInclude">putInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putServiceModeV2">putServiceModeV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAllowedToLeave">resetAllowedToLeave</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAllowModeSwitch">resetAllowModeSwitch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAllowUpdates">resetAllowUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAutoConnect">resetAutoConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetCaptivePortal">resetCaptivePortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetDisableAutoFallback">resetDisableAutoFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetExcludeOfficeIps">resetExcludeOfficeIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetInclude">resetInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetLanAllowMinutes">resetLanAllowMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetLanAllowSubnetSize">resetLanAllowSubnetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetRegisterInterfaceIpWithDns">resetRegisterInterfaceIpWithDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetSccmVpnBoundarySupport">resetSccmVpnBoundarySupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetServiceModeV2">resetServiceModeV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetSupportUrl">resetSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetSwitchLocked">resetSwitchLocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetTunnelProtocol">resetTunnelProtocol</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExclude` <a name="putExclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putExclude"></a>

```typescript
public putExclude(value: IResolvable | ZeroTrustDeviceDefaultProfileExclude[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putExclude.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude">ZeroTrustDeviceDefaultProfileExclude</a>[]

---

##### `putInclude` <a name="putInclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putInclude"></a>

```typescript
public putInclude(value: IResolvable | ZeroTrustDeviceDefaultProfileInclude[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putInclude.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude">ZeroTrustDeviceDefaultProfileInclude</a>[]

---

##### `putServiceModeV2` <a name="putServiceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putServiceModeV2"></a>

```typescript
public putServiceModeV2(value: ZeroTrustDeviceDefaultProfileServiceModeV2): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putServiceModeV2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a>

---

##### `resetAllowedToLeave` <a name="resetAllowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAllowedToLeave"></a>

```typescript
public resetAllowedToLeave(): void
```

##### `resetAllowModeSwitch` <a name="resetAllowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAllowModeSwitch"></a>

```typescript
public resetAllowModeSwitch(): void
```

##### `resetAllowUpdates` <a name="resetAllowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAllowUpdates"></a>

```typescript
public resetAllowUpdates(): void
```

##### `resetAutoConnect` <a name="resetAutoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAutoConnect"></a>

```typescript
public resetAutoConnect(): void
```

##### `resetCaptivePortal` <a name="resetCaptivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetCaptivePortal"></a>

```typescript
public resetCaptivePortal(): void
```

##### `resetDisableAutoFallback` <a name="resetDisableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetDisableAutoFallback"></a>

```typescript
public resetDisableAutoFallback(): void
```

##### `resetExclude` <a name="resetExclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetExclude"></a>

```typescript
public resetExclude(): void
```

##### `resetExcludeOfficeIps` <a name="resetExcludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetExcludeOfficeIps"></a>

```typescript
public resetExcludeOfficeIps(): void
```

##### `resetInclude` <a name="resetInclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetInclude"></a>

```typescript
public resetInclude(): void
```

##### `resetLanAllowMinutes` <a name="resetLanAllowMinutes" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetLanAllowMinutes"></a>

```typescript
public resetLanAllowMinutes(): void
```

##### `resetLanAllowSubnetSize` <a name="resetLanAllowSubnetSize" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetLanAllowSubnetSize"></a>

```typescript
public resetLanAllowSubnetSize(): void
```

##### `resetRegisterInterfaceIpWithDns` <a name="resetRegisterInterfaceIpWithDns" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetRegisterInterfaceIpWithDns"></a>

```typescript
public resetRegisterInterfaceIpWithDns(): void
```

##### `resetSccmVpnBoundarySupport` <a name="resetSccmVpnBoundarySupport" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetSccmVpnBoundarySupport"></a>

```typescript
public resetSccmVpnBoundarySupport(): void
```

##### `resetServiceModeV2` <a name="resetServiceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetServiceModeV2"></a>

```typescript
public resetServiceModeV2(): void
```

##### `resetSupportUrl` <a name="resetSupportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetSupportUrl"></a>

```typescript
public resetSupportUrl(): void
```

##### `resetSwitchLocked` <a name="resetSwitchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetSwitchLocked"></a>

```typescript
public resetSwitchLocked(): void
```

##### `resetTunnelProtocol` <a name="resetTunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetTunnelProtocol"></a>

```typescript
public resetTunnelProtocol(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDeviceDefaultProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isConstruct"></a>

```typescript
import { zeroTrustDeviceDefaultProfile } from '@cdktf/provider-cloudflare'

zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformElement"></a>

```typescript
import { zeroTrustDeviceDefaultProfile } from '@cdktf/provider-cloudflare'

zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformResource"></a>

```typescript
import { zeroTrustDeviceDefaultProfile } from '@cdktf/provider-cloudflare'

zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.generateConfigForImport"></a>

```typescript
import { zeroTrustDeviceDefaultProfile } from '@cdktf/provider-cloudflare'

zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZeroTrustDeviceDefaultProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustDeviceDefaultProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustDeviceDefaultProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDeviceDefaultProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.exclude">exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList">ZeroTrustDeviceDefaultProfileExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.fallbackDomains">fallbackDomains</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList">ZeroTrustDeviceDefaultProfileFallbackDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.gatewayUniqueId">gatewayUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.include">include</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList">ZeroTrustDeviceDefaultProfileIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.serviceModeV2">serviceModeV2</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference">ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowedToLeaveInput">allowedToLeaveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowModeSwitchInput">allowModeSwitchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowUpdatesInput">allowUpdatesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.autoConnectInput">autoConnectInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.captivePortalInput">captivePortalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.disableAutoFallbackInput">disableAutoFallbackInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.excludeInput">excludeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude">ZeroTrustDeviceDefaultProfileExclude</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.excludeOfficeIpsInput">excludeOfficeIpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.includeInput">includeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude">ZeroTrustDeviceDefaultProfileInclude</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.lanAllowMinutesInput">lanAllowMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.lanAllowSubnetSizeInput">lanAllowSubnetSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.registerInterfaceIpWithDnsInput">registerInterfaceIpWithDnsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.sccmVpnBoundarySupportInput">sccmVpnBoundarySupportInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.serviceModeV2Input">serviceModeV2Input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.supportUrlInput">supportUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.switchLockedInput">switchLockedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.tunnelProtocolInput">tunnelProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowedToLeave">allowedToLeave</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowModeSwitch">allowModeSwitch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowUpdates">allowUpdates</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.autoConnect">autoConnect</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.captivePortal">captivePortal</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.disableAutoFallback">disableAutoFallback</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.excludeOfficeIps">excludeOfficeIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.lanAllowMinutes">lanAllowMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.lanAllowSubnetSize">lanAllowSubnetSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.registerInterfaceIpWithDns">registerInterfaceIpWithDns</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.sccmVpnBoundarySupport">sccmVpnBoundarySupport</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.supportUrl">supportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.switchLocked">switchLocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.tunnelProtocol">tunnelProtocol</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.default"></a>

```typescript
public readonly default: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.exclude"></a>

```typescript
public readonly exclude: ZeroTrustDeviceDefaultProfileExcludeList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList">ZeroTrustDeviceDefaultProfileExcludeList</a>

---

##### `fallbackDomains`<sup>Required</sup> <a name="fallbackDomains" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.fallbackDomains"></a>

```typescript
public readonly fallbackDomains: ZeroTrustDeviceDefaultProfileFallbackDomainsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList">ZeroTrustDeviceDefaultProfileFallbackDomainsList</a>

---

##### `gatewayUniqueId`<sup>Required</sup> <a name="gatewayUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.gatewayUniqueId"></a>

```typescript
public readonly gatewayUniqueId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.include"></a>

```typescript
public readonly include: ZeroTrustDeviceDefaultProfileIncludeList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList">ZeroTrustDeviceDefaultProfileIncludeList</a>

---

##### `serviceModeV2`<sup>Required</sup> <a name="serviceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.serviceModeV2"></a>

```typescript
public readonly serviceModeV2: ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference">ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `allowedToLeaveInput`<sup>Optional</sup> <a name="allowedToLeaveInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowedToLeaveInput"></a>

```typescript
public readonly allowedToLeaveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowModeSwitchInput`<sup>Optional</sup> <a name="allowModeSwitchInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowModeSwitchInput"></a>

```typescript
public readonly allowModeSwitchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowUpdatesInput`<sup>Optional</sup> <a name="allowUpdatesInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowUpdatesInput"></a>

```typescript
public readonly allowUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoConnectInput`<sup>Optional</sup> <a name="autoConnectInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.autoConnectInput"></a>

```typescript
public readonly autoConnectInput: number;
```

- *Type:* number

---

##### `captivePortalInput`<sup>Optional</sup> <a name="captivePortalInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.captivePortalInput"></a>

```typescript
public readonly captivePortalInput: number;
```

- *Type:* number

---

##### `disableAutoFallbackInput`<sup>Optional</sup> <a name="disableAutoFallbackInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.disableAutoFallbackInput"></a>

```typescript
public readonly disableAutoFallbackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.excludeInput"></a>

```typescript
public readonly excludeInput: IResolvable | ZeroTrustDeviceDefaultProfileExclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude">ZeroTrustDeviceDefaultProfileExclude</a>[]

---

##### `excludeOfficeIpsInput`<sup>Optional</sup> <a name="excludeOfficeIpsInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.excludeOfficeIpsInput"></a>

```typescript
public readonly excludeOfficeIpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.includeInput"></a>

```typescript
public readonly includeInput: IResolvable | ZeroTrustDeviceDefaultProfileInclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude">ZeroTrustDeviceDefaultProfileInclude</a>[]

---

##### `lanAllowMinutesInput`<sup>Optional</sup> <a name="lanAllowMinutesInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.lanAllowMinutesInput"></a>

```typescript
public readonly lanAllowMinutesInput: number;
```

- *Type:* number

---

##### `lanAllowSubnetSizeInput`<sup>Optional</sup> <a name="lanAllowSubnetSizeInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.lanAllowSubnetSizeInput"></a>

```typescript
public readonly lanAllowSubnetSizeInput: number;
```

- *Type:* number

---

##### `registerInterfaceIpWithDnsInput`<sup>Optional</sup> <a name="registerInterfaceIpWithDnsInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.registerInterfaceIpWithDnsInput"></a>

```typescript
public readonly registerInterfaceIpWithDnsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sccmVpnBoundarySupportInput`<sup>Optional</sup> <a name="sccmVpnBoundarySupportInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.sccmVpnBoundarySupportInput"></a>

```typescript
public readonly sccmVpnBoundarySupportInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serviceModeV2Input`<sup>Optional</sup> <a name="serviceModeV2Input" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.serviceModeV2Input"></a>

```typescript
public readonly serviceModeV2Input: IResolvable | ZeroTrustDeviceDefaultProfileServiceModeV2;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a>

---

##### `supportUrlInput`<sup>Optional</sup> <a name="supportUrlInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.supportUrlInput"></a>

```typescript
public readonly supportUrlInput: string;
```

- *Type:* string

---

##### `switchLockedInput`<sup>Optional</sup> <a name="switchLockedInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.switchLockedInput"></a>

```typescript
public readonly switchLockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tunnelProtocolInput`<sup>Optional</sup> <a name="tunnelProtocolInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.tunnelProtocolInput"></a>

```typescript
public readonly tunnelProtocolInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `allowedToLeave`<sup>Required</sup> <a name="allowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowedToLeave"></a>

```typescript
public readonly allowedToLeave: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowModeSwitch`<sup>Required</sup> <a name="allowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowModeSwitch"></a>

```typescript
public readonly allowModeSwitch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowUpdates`<sup>Required</sup> <a name="allowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowUpdates"></a>

```typescript
public readonly allowUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoConnect`<sup>Required</sup> <a name="autoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.autoConnect"></a>

```typescript
public readonly autoConnect: number;
```

- *Type:* number

---

##### `captivePortal`<sup>Required</sup> <a name="captivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.captivePortal"></a>

```typescript
public readonly captivePortal: number;
```

- *Type:* number

---

##### `disableAutoFallback`<sup>Required</sup> <a name="disableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.disableAutoFallback"></a>

```typescript
public readonly disableAutoFallback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludeOfficeIps`<sup>Required</sup> <a name="excludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.excludeOfficeIps"></a>

```typescript
public readonly excludeOfficeIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lanAllowMinutes`<sup>Required</sup> <a name="lanAllowMinutes" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.lanAllowMinutes"></a>

```typescript
public readonly lanAllowMinutes: number;
```

- *Type:* number

---

##### `lanAllowSubnetSize`<sup>Required</sup> <a name="lanAllowSubnetSize" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.lanAllowSubnetSize"></a>

```typescript
public readonly lanAllowSubnetSize: number;
```

- *Type:* number

---

##### `registerInterfaceIpWithDns`<sup>Required</sup> <a name="registerInterfaceIpWithDns" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.registerInterfaceIpWithDns"></a>

```typescript
public readonly registerInterfaceIpWithDns: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sccmVpnBoundarySupport`<sup>Required</sup> <a name="sccmVpnBoundarySupport" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.sccmVpnBoundarySupport"></a>

```typescript
public readonly sccmVpnBoundarySupport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `supportUrl`<sup>Required</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.supportUrl"></a>

```typescript
public readonly supportUrl: string;
```

- *Type:* string

---

##### `switchLocked`<sup>Required</sup> <a name="switchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.switchLocked"></a>

```typescript
public readonly switchLocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tunnelProtocol`<sup>Required</sup> <a name="tunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.tunnelProtocol"></a>

```typescript
public readonly tunnelProtocol: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDeviceDefaultProfileConfig <a name="ZeroTrustDeviceDefaultProfileConfig" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.Initializer"></a>

```typescript
import { zeroTrustDeviceDefaultProfile } from '@cdktf/provider-cloudflare'

const zeroTrustDeviceDefaultProfileConfig: zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#account_id ZeroTrustDeviceDefaultProfile#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.allowedToLeave">allowedToLeave</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to allow devices to leave the organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.allowModeSwitch">allowModeSwitch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to allow the user to switch WARP between modes. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.allowUpdates">allowUpdates</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to receive update notifications when a new version of the client is available. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.autoConnect">autoConnect</a></code> | <code>number</code> | The amount of time in seconds to reconnect after having been disabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.captivePortal">captivePortal</a></code> | <code>number</code> | Turn on the captive portal after the specified amount of time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.disableAutoFallback">disableAutoFallback</a></code> | <code>boolean \| cdktf.IResolvable</code> | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.exclude">exclude</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude">ZeroTrustDeviceDefaultProfileExclude</a>[]</code> | List of routes excluded in the WARP client's tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.excludeOfficeIps">excludeOfficeIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.include">include</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude">ZeroTrustDeviceDefaultProfileInclude</a>[]</code> | List of routes included in the WARP client's tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.lanAllowMinutes">lanAllowMinutes</a></code> | <code>number</code> | The amount of time in minutes a user is allowed access to their LAN. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.lanAllowSubnetSize">lanAllowSubnetSize</a></code> | <code>number</code> | The size of the subnet for the local access network. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.registerInterfaceIpWithDns">registerInterfaceIpWithDns</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.sccmVpnBoundarySupport">sccmVpnBoundarySupport</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. (Windows only). |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.serviceModeV2">serviceModeV2</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#service_mode_v2 ZeroTrustDeviceDefaultProfile#service_mode_v2}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.supportUrl">supportUrl</a></code> | <code>string</code> | The URL to launch when the Send Feedback button is clicked. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.switchLocked">switchLocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.tunnelProtocol">tunnelProtocol</a></code> | <code>string</code> | Determines which tunnel protocol to use. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#account_id ZeroTrustDeviceDefaultProfile#account_id}.

---

##### `allowedToLeave`<sup>Optional</sup> <a name="allowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.allowedToLeave"></a>

```typescript
public readonly allowedToLeave: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to allow devices to leave the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#allowed_to_leave ZeroTrustDeviceDefaultProfile#allowed_to_leave}

---

##### `allowModeSwitch`<sup>Optional</sup> <a name="allowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.allowModeSwitch"></a>

```typescript
public readonly allowModeSwitch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to allow the user to switch WARP between modes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#allow_mode_switch ZeroTrustDeviceDefaultProfile#allow_mode_switch}

---

##### `allowUpdates`<sup>Optional</sup> <a name="allowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.allowUpdates"></a>

```typescript
public readonly allowUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to receive update notifications when a new version of the client is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#allow_updates ZeroTrustDeviceDefaultProfile#allow_updates}

---

##### `autoConnect`<sup>Optional</sup> <a name="autoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.autoConnect"></a>

```typescript
public readonly autoConnect: number;
```

- *Type:* number

The amount of time in seconds to reconnect after having been disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#auto_connect ZeroTrustDeviceDefaultProfile#auto_connect}

---

##### `captivePortal`<sup>Optional</sup> <a name="captivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.captivePortal"></a>

```typescript
public readonly captivePortal: number;
```

- *Type:* number

Turn on the captive portal after the specified amount of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#captive_portal ZeroTrustDeviceDefaultProfile#captive_portal}

---

##### `disableAutoFallback`<sup>Optional</sup> <a name="disableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.disableAutoFallback"></a>

```typescript
public readonly disableAutoFallback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#disable_auto_fallback ZeroTrustDeviceDefaultProfile#disable_auto_fallback}

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.exclude"></a>

```typescript
public readonly exclude: IResolvable | ZeroTrustDeviceDefaultProfileExclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude">ZeroTrustDeviceDefaultProfileExclude</a>[]

List of routes excluded in the WARP client's tunnel.

Both 'exclude' and 'include' cannot be set in the same request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#exclude ZeroTrustDeviceDefaultProfile#exclude}

---

##### `excludeOfficeIps`<sup>Optional</sup> <a name="excludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.excludeOfficeIps"></a>

```typescript
public readonly excludeOfficeIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to add Microsoft IPs to Split Tunnel exclusions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#exclude_office_ips ZeroTrustDeviceDefaultProfile#exclude_office_ips}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.include"></a>

```typescript
public readonly include: IResolvable | ZeroTrustDeviceDefaultProfileInclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude">ZeroTrustDeviceDefaultProfileInclude</a>[]

List of routes included in the WARP client's tunnel.

Both 'exclude' and 'include' cannot be set in the same request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#include ZeroTrustDeviceDefaultProfile#include}

---

##### `lanAllowMinutes`<sup>Optional</sup> <a name="lanAllowMinutes" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.lanAllowMinutes"></a>

```typescript
public readonly lanAllowMinutes: number;
```

- *Type:* number

The amount of time in minutes a user is allowed access to their LAN.

A value of 0 will allow LAN access until the next WARP reconnection, such as a reboot or a laptop waking from sleep. Note that this field is omitted from the response if null or unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#lan_allow_minutes ZeroTrustDeviceDefaultProfile#lan_allow_minutes}

---

##### `lanAllowSubnetSize`<sup>Optional</sup> <a name="lanAllowSubnetSize" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.lanAllowSubnetSize"></a>

```typescript
public readonly lanAllowSubnetSize: number;
```

- *Type:* number

The size of the subnet for the local access network.

Note that this field is omitted from the response if null or unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#lan_allow_subnet_size ZeroTrustDeviceDefaultProfile#lan_allow_subnet_size}

---

##### `registerInterfaceIpWithDns`<sup>Optional</sup> <a name="registerInterfaceIpWithDns" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.registerInterfaceIpWithDns"></a>

```typescript
public readonly registerInterfaceIpWithDns: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines if the operating system will register WARP's local interface IP with your on-premises DNS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#register_interface_ip_with_dns ZeroTrustDeviceDefaultProfile#register_interface_ip_with_dns}

---

##### `sccmVpnBoundarySupport`<sup>Optional</sup> <a name="sccmVpnBoundarySupport" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.sccmVpnBoundarySupport"></a>

```typescript
public readonly sccmVpnBoundarySupport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. (Windows only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#sccm_vpn_boundary_support ZeroTrustDeviceDefaultProfile#sccm_vpn_boundary_support}

---

##### `serviceModeV2`<sup>Optional</sup> <a name="serviceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.serviceModeV2"></a>

```typescript
public readonly serviceModeV2: ZeroTrustDeviceDefaultProfileServiceModeV2;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#service_mode_v2 ZeroTrustDeviceDefaultProfile#service_mode_v2}.

---

##### `supportUrl`<sup>Optional</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.supportUrl"></a>

```typescript
public readonly supportUrl: string;
```

- *Type:* string

The URL to launch when the Send Feedback button is clicked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#support_url ZeroTrustDeviceDefaultProfile#support_url}

---

##### `switchLocked`<sup>Optional</sup> <a name="switchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.switchLocked"></a>

```typescript
public readonly switchLocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to allow the user to turn off the WARP switch and disconnect the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#switch_locked ZeroTrustDeviceDefaultProfile#switch_locked}

---

##### `tunnelProtocol`<sup>Optional</sup> <a name="tunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.tunnelProtocol"></a>

```typescript
public readonly tunnelProtocol: string;
```

- *Type:* string

Determines which tunnel protocol to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#tunnel_protocol ZeroTrustDeviceDefaultProfile#tunnel_protocol}

---

### ZeroTrustDeviceDefaultProfileExclude <a name="ZeroTrustDeviceDefaultProfileExclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude.Initializer"></a>

```typescript
import { zeroTrustDeviceDefaultProfile } from '@cdktf/provider-cloudflare'

const zeroTrustDeviceDefaultProfileExclude: zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude.property.address">address</a></code> | <code>string</code> | The address in CIDR format to exclude from the tunnel. If `address` is present, `host` must not be present. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude.property.description">description</a></code> | <code>string</code> | A description of the Split Tunnel item, displayed in the client UI. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude.property.host">host</a></code> | <code>string</code> | The domain name to exclude from the tunnel. If `host` is present, `address` must not be present. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The address in CIDR format to exclude from the tunnel. If `address` is present, `host` must not be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#address ZeroTrustDeviceDefaultProfile#address}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the Split Tunnel item, displayed in the client UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#description ZeroTrustDeviceDefaultProfile#description}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The domain name to exclude from the tunnel. If `host` is present, `address` must not be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#host ZeroTrustDeviceDefaultProfile#host}

---

### ZeroTrustDeviceDefaultProfileFallbackDomains <a name="ZeroTrustDeviceDefaultProfileFallbackDomains" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomains.Initializer"></a>

```typescript
import { zeroTrustDeviceDefaultProfile } from '@cdktf/provider-cloudflare'

const zeroTrustDeviceDefaultProfileFallbackDomains: zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomains = { ... }
```


### ZeroTrustDeviceDefaultProfileInclude <a name="ZeroTrustDeviceDefaultProfileInclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude.Initializer"></a>

```typescript
import { zeroTrustDeviceDefaultProfile } from '@cdktf/provider-cloudflare'

const zeroTrustDeviceDefaultProfileInclude: zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude.property.address">address</a></code> | <code>string</code> | The address in CIDR format to include in the tunnel. If `address` is present, `host` must not be present. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude.property.description">description</a></code> | <code>string</code> | A description of the Split Tunnel item, displayed in the client UI. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude.property.host">host</a></code> | <code>string</code> | The domain name to include in the tunnel. If `host` is present, `address` must not be present. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The address in CIDR format to include in the tunnel. If `address` is present, `host` must not be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#address ZeroTrustDeviceDefaultProfile#address}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the Split Tunnel item, displayed in the client UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#description ZeroTrustDeviceDefaultProfile#description}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The domain name to include in the tunnel. If `host` is present, `address` must not be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#host ZeroTrustDeviceDefaultProfile#host}

---

### ZeroTrustDeviceDefaultProfileServiceModeV2 <a name="ZeroTrustDeviceDefaultProfileServiceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2.Initializer"></a>

```typescript
import { zeroTrustDeviceDefaultProfile } from '@cdktf/provider-cloudflare'

const zeroTrustDeviceDefaultProfileServiceModeV2: zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2.property.mode">mode</a></code> | <code>string</code> | The mode to run the WARP client under. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2.property.port">port</a></code> | <code>number</code> | The port number when used with proxy mode. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The mode to run the WARP client under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#mode ZeroTrustDeviceDefaultProfile#mode}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port number when used with proxy mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_default_profile#port ZeroTrustDeviceDefaultProfile#port}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDeviceDefaultProfileExcludeList <a name="ZeroTrustDeviceDefaultProfileExcludeList" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer"></a>

```typescript
import { zeroTrustDeviceDefaultProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.get"></a>

```typescript
public get(index: number): ZeroTrustDeviceDefaultProfileExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude">ZeroTrustDeviceDefaultProfileExclude</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDeviceDefaultProfileExclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude">ZeroTrustDeviceDefaultProfileExclude</a>[]

---


### ZeroTrustDeviceDefaultProfileExcludeOutputReference <a name="ZeroTrustDeviceDefaultProfileExcludeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer"></a>

```typescript
import { zeroTrustDeviceDefaultProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resetHost">resetHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude">ZeroTrustDeviceDefaultProfileExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDeviceDefaultProfileExclude;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude">ZeroTrustDeviceDefaultProfileExclude</a>

---


### ZeroTrustDeviceDefaultProfileFallbackDomainsList <a name="ZeroTrustDeviceDefaultProfileFallbackDomainsList" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer"></a>

```typescript
import { zeroTrustDeviceDefaultProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.get"></a>

```typescript
public get(index: number): ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference <a name="ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer"></a>

```typescript
import { zeroTrustDeviceDefaultProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.dnsServer">dnsServer</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomains">ZeroTrustDeviceDefaultProfileFallbackDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.dnsServer"></a>

```typescript
public readonly dnsServer: string[];
```

- *Type:* string[]

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustDeviceDefaultProfileFallbackDomains;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomains">ZeroTrustDeviceDefaultProfileFallbackDomains</a>

---


### ZeroTrustDeviceDefaultProfileIncludeList <a name="ZeroTrustDeviceDefaultProfileIncludeList" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer"></a>

```typescript
import { zeroTrustDeviceDefaultProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.get"></a>

```typescript
public get(index: number): ZeroTrustDeviceDefaultProfileIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude">ZeroTrustDeviceDefaultProfileInclude</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDeviceDefaultProfileInclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude">ZeroTrustDeviceDefaultProfileInclude</a>[]

---


### ZeroTrustDeviceDefaultProfileIncludeOutputReference <a name="ZeroTrustDeviceDefaultProfileIncludeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer"></a>

```typescript
import { zeroTrustDeviceDefaultProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resetHost">resetHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude">ZeroTrustDeviceDefaultProfileInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDeviceDefaultProfileInclude;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude">ZeroTrustDeviceDefaultProfileInclude</a>

---


### ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference <a name="ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer"></a>

```typescript
import { zeroTrustDeviceDefaultProfile } from '@cdktf/provider-cloudflare'

new zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDeviceDefaultProfileServiceModeV2;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a>

---



