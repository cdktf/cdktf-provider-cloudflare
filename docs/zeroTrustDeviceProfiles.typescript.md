# `zeroTrustDeviceProfiles` Submodule <a name="`zeroTrustDeviceProfiles` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDeviceProfiles <a name="ZeroTrustDeviceProfiles" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_device_profiles cloudflare_zero_trust_device_profiles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer"></a>

```typescript
import { zeroTrustDeviceProfiles } from '@cdktf/provider-cloudflare'

new zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles(scope: Construct, id: string, config: ZeroTrustDeviceProfilesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig">ZeroTrustDeviceProfilesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig">ZeroTrustDeviceProfilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetAllowedToLeave">resetAllowedToLeave</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetAllowModeSwitch">resetAllowModeSwitch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetAllowUpdates">resetAllowUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetAutoConnect">resetAutoConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetCaptivePortal">resetCaptivePortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetDisableAutoFallback">resetDisableAutoFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetExcludeOfficeIps">resetExcludeOfficeIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetMatch">resetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetPrecedence">resetPrecedence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetServiceModeV2Mode">resetServiceModeV2Mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetServiceModeV2Port">resetServiceModeV2Port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetSupportUrl">resetSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetSwitchLocked">resetSwitchLocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetTunnelProtocol">resetTunnelProtocol</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedToLeave` <a name="resetAllowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetAllowedToLeave"></a>

```typescript
public resetAllowedToLeave(): void
```

##### `resetAllowModeSwitch` <a name="resetAllowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetAllowModeSwitch"></a>

```typescript
public resetAllowModeSwitch(): void
```

##### `resetAllowUpdates` <a name="resetAllowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetAllowUpdates"></a>

```typescript
public resetAllowUpdates(): void
```

##### `resetAutoConnect` <a name="resetAutoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetAutoConnect"></a>

```typescript
public resetAutoConnect(): void
```

##### `resetCaptivePortal` <a name="resetCaptivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetCaptivePortal"></a>

```typescript
public resetCaptivePortal(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDisableAutoFallback` <a name="resetDisableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetDisableAutoFallback"></a>

```typescript
public resetDisableAutoFallback(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetExcludeOfficeIps` <a name="resetExcludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetExcludeOfficeIps"></a>

```typescript
public resetExcludeOfficeIps(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMatch` <a name="resetMatch" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetMatch"></a>

```typescript
public resetMatch(): void
```

##### `resetPrecedence` <a name="resetPrecedence" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetPrecedence"></a>

```typescript
public resetPrecedence(): void
```

##### `resetServiceModeV2Mode` <a name="resetServiceModeV2Mode" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetServiceModeV2Mode"></a>

```typescript
public resetServiceModeV2Mode(): void
```

##### `resetServiceModeV2Port` <a name="resetServiceModeV2Port" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetServiceModeV2Port"></a>

```typescript
public resetServiceModeV2Port(): void
```

##### `resetSupportUrl` <a name="resetSupportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetSupportUrl"></a>

```typescript
public resetSupportUrl(): void
```

##### `resetSwitchLocked` <a name="resetSwitchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetSwitchLocked"></a>

```typescript
public resetSwitchLocked(): void
```

##### `resetTunnelProtocol` <a name="resetTunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.resetTunnelProtocol"></a>

```typescript
public resetTunnelProtocol(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDeviceProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isConstruct"></a>

```typescript
import { zeroTrustDeviceProfiles } from '@cdktf/provider-cloudflare'

zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isTerraformElement"></a>

```typescript
import { zeroTrustDeviceProfiles } from '@cdktf/provider-cloudflare'

zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isTerraformResource"></a>

```typescript
import { zeroTrustDeviceProfiles } from '@cdktf/provider-cloudflare'

zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.generateConfigForImport"></a>

```typescript
import { zeroTrustDeviceProfiles } from '@cdktf/provider-cloudflare'

zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZeroTrustDeviceProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustDeviceProfiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustDeviceProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_device_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDeviceProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowedToLeaveInput">allowedToLeaveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowModeSwitchInput">allowModeSwitchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowUpdatesInput">allowUpdatesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.autoConnectInput">autoConnectInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.captivePortalInput">captivePortalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.defaultInput">defaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.disableAutoFallbackInput">disableAutoFallbackInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.excludeOfficeIpsInput">excludeOfficeIpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.matchInput">matchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.precedenceInput">precedenceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.serviceModeV2ModeInput">serviceModeV2ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.serviceModeV2PortInput">serviceModeV2PortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.supportUrlInput">supportUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.switchLockedInput">switchLockedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.tunnelProtocolInput">tunnelProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowedToLeave">allowedToLeave</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowModeSwitch">allowModeSwitch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowUpdates">allowUpdates</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.autoConnect">autoConnect</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.captivePortal">captivePortal</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.disableAutoFallback">disableAutoFallback</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.excludeOfficeIps">excludeOfficeIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.match">match</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.precedence">precedence</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.serviceModeV2Mode">serviceModeV2Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.serviceModeV2Port">serviceModeV2Port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.supportUrl">supportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.switchLocked">switchLocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.tunnelProtocol">tunnelProtocol</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `allowedToLeaveInput`<sup>Optional</sup> <a name="allowedToLeaveInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowedToLeaveInput"></a>

```typescript
public readonly allowedToLeaveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowModeSwitchInput`<sup>Optional</sup> <a name="allowModeSwitchInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowModeSwitchInput"></a>

```typescript
public readonly allowModeSwitchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowUpdatesInput`<sup>Optional</sup> <a name="allowUpdatesInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowUpdatesInput"></a>

```typescript
public readonly allowUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoConnectInput`<sup>Optional</sup> <a name="autoConnectInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.autoConnectInput"></a>

```typescript
public readonly autoConnectInput: number;
```

- *Type:* number

---

##### `captivePortalInput`<sup>Optional</sup> <a name="captivePortalInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.captivePortalInput"></a>

```typescript
public readonly captivePortalInput: number;
```

- *Type:* number

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.defaultInput"></a>

```typescript
public readonly defaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableAutoFallbackInput`<sup>Optional</sup> <a name="disableAutoFallbackInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.disableAutoFallbackInput"></a>

```typescript
public readonly disableAutoFallbackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludeOfficeIpsInput`<sup>Optional</sup> <a name="excludeOfficeIpsInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.excludeOfficeIpsInput"></a>

```typescript
public readonly excludeOfficeIpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.matchInput"></a>

```typescript
public readonly matchInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `precedenceInput`<sup>Optional</sup> <a name="precedenceInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.precedenceInput"></a>

```typescript
public readonly precedenceInput: number;
```

- *Type:* number

---

##### `serviceModeV2ModeInput`<sup>Optional</sup> <a name="serviceModeV2ModeInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.serviceModeV2ModeInput"></a>

```typescript
public readonly serviceModeV2ModeInput: string;
```

- *Type:* string

---

##### `serviceModeV2PortInput`<sup>Optional</sup> <a name="serviceModeV2PortInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.serviceModeV2PortInput"></a>

```typescript
public readonly serviceModeV2PortInput: number;
```

- *Type:* number

---

##### `supportUrlInput`<sup>Optional</sup> <a name="supportUrlInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.supportUrlInput"></a>

```typescript
public readonly supportUrlInput: string;
```

- *Type:* string

---

##### `switchLockedInput`<sup>Optional</sup> <a name="switchLockedInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.switchLockedInput"></a>

```typescript
public readonly switchLockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tunnelProtocolInput`<sup>Optional</sup> <a name="tunnelProtocolInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.tunnelProtocolInput"></a>

```typescript
public readonly tunnelProtocolInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `allowedToLeave`<sup>Required</sup> <a name="allowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowedToLeave"></a>

```typescript
public readonly allowedToLeave: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowModeSwitch`<sup>Required</sup> <a name="allowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowModeSwitch"></a>

```typescript
public readonly allowModeSwitch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowUpdates`<sup>Required</sup> <a name="allowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.allowUpdates"></a>

```typescript
public readonly allowUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoConnect`<sup>Required</sup> <a name="autoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.autoConnect"></a>

```typescript
public readonly autoConnect: number;
```

- *Type:* number

---

##### `captivePortal`<sup>Required</sup> <a name="captivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.captivePortal"></a>

```typescript
public readonly captivePortal: number;
```

- *Type:* number

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableAutoFallback`<sup>Required</sup> <a name="disableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.disableAutoFallback"></a>

```typescript
public readonly disableAutoFallback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludeOfficeIps`<sup>Required</sup> <a name="excludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.excludeOfficeIps"></a>

```typescript
public readonly excludeOfficeIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.precedence"></a>

```typescript
public readonly precedence: number;
```

- *Type:* number

---

##### `serviceModeV2Mode`<sup>Required</sup> <a name="serviceModeV2Mode" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.serviceModeV2Mode"></a>

```typescript
public readonly serviceModeV2Mode: string;
```

- *Type:* string

---

##### `serviceModeV2Port`<sup>Required</sup> <a name="serviceModeV2Port" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.serviceModeV2Port"></a>

```typescript
public readonly serviceModeV2Port: number;
```

- *Type:* number

---

##### `supportUrl`<sup>Required</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.supportUrl"></a>

```typescript
public readonly supportUrl: string;
```

- *Type:* string

---

##### `switchLocked`<sup>Required</sup> <a name="switchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.switchLocked"></a>

```typescript
public readonly switchLocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tunnelProtocol`<sup>Required</sup> <a name="tunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.tunnelProtocol"></a>

```typescript
public readonly tunnelProtocol: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfiles.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDeviceProfilesConfig <a name="ZeroTrustDeviceProfilesConfig" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.Initializer"></a>

```typescript
import { zeroTrustDeviceProfiles } from '@cdktf/provider-cloudflare'

const zeroTrustDeviceProfilesConfig: zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.description">description</a></code> | <code>string</code> | Description of Policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.name">name</a></code> | <code>string</code> | Name of the policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.allowedToLeave">allowedToLeave</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to allow devices to leave the organization. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.allowModeSwitch">allowModeSwitch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to allow mode switch for this policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.allowUpdates">allowUpdates</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to allow updates under this policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.autoConnect">autoConnect</a></code> | <code>number</code> | The amount of time in seconds to reconnect after having been disabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.captivePortal">captivePortal</a></code> | <code>number</code> | The captive portal value for this policy. Defaults to `180`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the policy refers to the default account policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.disableAutoFallback">disableAutoFallback</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable auto fallback for this policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the policy is enabled (cannot be set for default policies). Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.excludeOfficeIps">excludeOfficeIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to add Microsoft IPs to split tunnel exclusions. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_device_profiles#id ZeroTrustDeviceProfiles#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.match">match</a></code> | <code>string</code> | Wirefilter expression to match a device against when evaluating whether this policy should take effect for that device. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.precedence">precedence</a></code> | <code>number</code> | The precedence of the policy. Lower values indicate higher precedence. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.serviceModeV2Mode">serviceModeV2Mode</a></code> | <code>string</code> | The service mode. Available values: `1dot1`, `warp`, `proxy`, `posture_only`, `warp_tunnel_only`. Defaults to `warp`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.serviceModeV2Port">serviceModeV2Port</a></code> | <code>number</code> | The port to use for the proxy service mode. Required when using `service_mode_v2_mode`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.supportUrl">supportUrl</a></code> | <code>string</code> | The support URL that will be opened when sending feedback. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.switchLocked">switchLocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enablement of the ZT client switch lock. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.tunnelProtocol">tunnelProtocol</a></code> | <code>string</code> | Determines which tunnel protocol to use. Available values: `""`, `wireguard`, `masque`. Defaults to `wireguard`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_device_profiles#account_id ZeroTrustDeviceProfiles#account_id}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_device_profiles#description ZeroTrustDeviceProfiles#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_device_profiles#name ZeroTrustDeviceProfiles#name}

---

##### `allowedToLeave`<sup>Optional</sup> <a name="allowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.allowedToLeave"></a>

```typescript
public readonly allowedToLeave: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to allow devices to leave the organization. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_device_profiles#allowed_to_leave ZeroTrustDeviceProfiles#allowed_to_leave}

---

##### `allowModeSwitch`<sup>Optional</sup> <a name="allowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.allowModeSwitch"></a>

```typescript
public readonly allowModeSwitch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to allow mode switch for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_device_profiles#allow_mode_switch ZeroTrustDeviceProfiles#allow_mode_switch}

---

##### `allowUpdates`<sup>Optional</sup> <a name="allowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.allowUpdates"></a>

```typescript
public readonly allowUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to allow updates under this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_device_profiles#allow_updates ZeroTrustDeviceProfiles#allow_updates}

---

##### `autoConnect`<sup>Optional</sup> <a name="autoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.autoConnect"></a>

```typescript
public readonly autoConnect: number;
```

- *Type:* number

The amount of time in seconds to reconnect after having been disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_device_profiles#auto_connect ZeroTrustDeviceProfiles#auto_connect}

---

##### `captivePortal`<sup>Optional</sup> <a name="captivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.captivePortal"></a>

```typescript
public readonly captivePortal: number;
```

- *Type:* number

The captive portal value for this policy. Defaults to `180`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_device_profiles#captive_portal ZeroTrustDeviceProfiles#captive_portal}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the policy refers to the default account policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_device_profiles#default ZeroTrustDeviceProfiles#default}

---

##### `disableAutoFallback`<sup>Optional</sup> <a name="disableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.disableAutoFallback"></a>

```typescript
public readonly disableAutoFallback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable auto fallback for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_device_profiles#disable_auto_fallback ZeroTrustDeviceProfiles#disable_auto_fallback}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the policy is enabled (cannot be set for default policies). Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_device_profiles#enabled ZeroTrustDeviceProfiles#enabled}

---

##### `excludeOfficeIps`<sup>Optional</sup> <a name="excludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.excludeOfficeIps"></a>

```typescript
public readonly excludeOfficeIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to add Microsoft IPs to split tunnel exclusions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_device_profiles#exclude_office_ips ZeroTrustDeviceProfiles#exclude_office_ips}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_device_profiles#id ZeroTrustDeviceProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

Wirefilter expression to match a device against when evaluating whether this policy should take effect for that device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_device_profiles#match ZeroTrustDeviceProfiles#match}

---

##### `precedence`<sup>Optional</sup> <a name="precedence" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.precedence"></a>

```typescript
public readonly precedence: number;
```

- *Type:* number

The precedence of the policy. Lower values indicate higher precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_device_profiles#precedence ZeroTrustDeviceProfiles#precedence}

---

##### `serviceModeV2Mode`<sup>Optional</sup> <a name="serviceModeV2Mode" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.serviceModeV2Mode"></a>

```typescript
public readonly serviceModeV2Mode: string;
```

- *Type:* string

The service mode. Available values: `1dot1`, `warp`, `proxy`, `posture_only`, `warp_tunnel_only`. Defaults to `warp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_device_profiles#service_mode_v2_mode ZeroTrustDeviceProfiles#service_mode_v2_mode}

---

##### `serviceModeV2Port`<sup>Optional</sup> <a name="serviceModeV2Port" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.serviceModeV2Port"></a>

```typescript
public readonly serviceModeV2Port: number;
```

- *Type:* number

The port to use for the proxy service mode. Required when using `service_mode_v2_mode`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_device_profiles#service_mode_v2_port ZeroTrustDeviceProfiles#service_mode_v2_port}

---

##### `supportUrl`<sup>Optional</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.supportUrl"></a>

```typescript
public readonly supportUrl: string;
```

- *Type:* string

The support URL that will be opened when sending feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_device_profiles#support_url ZeroTrustDeviceProfiles#support_url}

---

##### `switchLocked`<sup>Optional</sup> <a name="switchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.switchLocked"></a>

```typescript
public readonly switchLocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enablement of the ZT client switch lock.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_device_profiles#switch_locked ZeroTrustDeviceProfiles#switch_locked}

---

##### `tunnelProtocol`<sup>Optional</sup> <a name="tunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceProfiles.ZeroTrustDeviceProfilesConfig.property.tunnelProtocol"></a>

```typescript
public readonly tunnelProtocol: string;
```

- *Type:* string

Determines which tunnel protocol to use. Available values: `""`, `wireguard`, `masque`. Defaults to `wireguard`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.41.0/docs/resources/zero_trust_device_profiles#tunnel_protocol ZeroTrustDeviceProfiles#tunnel_protocol}

---



