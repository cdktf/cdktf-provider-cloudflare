# `zeroTrustGatewaySettings` Submodule <a name="`zeroTrustGatewaySettings` Submodule" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustGatewaySettings <a name="ZeroTrustGatewaySettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings cloudflare_zero_trust_gateway_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettings(scope: Construct, id: string, config: ZeroTrustGatewaySettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig">ZeroTrustGatewaySettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig">ZeroTrustGatewaySettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putAntivirus">putAntivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBlockPage">putBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBodyScanning">putBodyScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putCertificate">putCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putCustomCertificate">putCustomCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putExtendedEmailMatching">putExtendedEmailMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putFips">putFips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putLogging">putLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putPayloadLog">putPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putProxy">putProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putSshSessionLog">putSshSessionLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetActivityLogEnabled">resetActivityLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetAntivirus">resetAntivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetBlockPage">resetBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetBodyScanning">resetBodyScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetCustomCertificate">resetCustomCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetExtendedEmailMatching">resetExtendedEmailMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetFips">resetFips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetLogging">resetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetNonIdentityBrowserIsolationEnabled">resetNonIdentityBrowserIsolationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetPayloadLog">resetPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetProtocolDetectionEnabled">resetProtocolDetectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetProxy">resetProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetSshSessionLog">resetSshSessionLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetTlsDecryptEnabled">resetTlsDecryptEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetUrlBrowserIsolationEnabled">resetUrlBrowserIsolationEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAntivirus` <a name="putAntivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putAntivirus"></a>

```typescript
public putAntivirus(value: ZeroTrustGatewaySettingsAntivirus): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putAntivirus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a>

---

##### `putBlockPage` <a name="putBlockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBlockPage"></a>

```typescript
public putBlockPage(value: ZeroTrustGatewaySettingsBlockPage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBlockPage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a>

---

##### `putBodyScanning` <a name="putBodyScanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBodyScanning"></a>

```typescript
public putBodyScanning(value: ZeroTrustGatewaySettingsBodyScanning): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBodyScanning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a>

---

##### `putCertificate` <a name="putCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putCertificate"></a>

```typescript
public putCertificate(value: ZeroTrustGatewaySettingsCertificate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a>

---

##### `putCustomCertificate` <a name="putCustomCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putCustomCertificate"></a>

```typescript
public putCustomCertificate(value: ZeroTrustGatewaySettingsCustomCertificate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putCustomCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a>

---

##### `putExtendedEmailMatching` <a name="putExtendedEmailMatching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putExtendedEmailMatching"></a>

```typescript
public putExtendedEmailMatching(value: ZeroTrustGatewaySettingsExtendedEmailMatching): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putExtendedEmailMatching.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a>

---

##### `putFips` <a name="putFips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putFips"></a>

```typescript
public putFips(value: ZeroTrustGatewaySettingsFips): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putFips.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a>

---

##### `putLogging` <a name="putLogging" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putLogging"></a>

```typescript
public putLogging(value: ZeroTrustGatewaySettingsLogging): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a>

---

##### `putPayloadLog` <a name="putPayloadLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putPayloadLog"></a>

```typescript
public putPayloadLog(value: ZeroTrustGatewaySettingsPayloadLog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putPayloadLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a>

---

##### `putProxy` <a name="putProxy" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putProxy"></a>

```typescript
public putProxy(value: ZeroTrustGatewaySettingsProxy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a>

---

##### `putSshSessionLog` <a name="putSshSessionLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putSshSessionLog"></a>

```typescript
public putSshSessionLog(value: ZeroTrustGatewaySettingsSshSessionLog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putSshSessionLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a>

---

##### `resetActivityLogEnabled` <a name="resetActivityLogEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetActivityLogEnabled"></a>

```typescript
public resetActivityLogEnabled(): void
```

##### `resetAntivirus` <a name="resetAntivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetAntivirus"></a>

```typescript
public resetAntivirus(): void
```

##### `resetBlockPage` <a name="resetBlockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetBlockPage"></a>

```typescript
public resetBlockPage(): void
```

##### `resetBodyScanning` <a name="resetBodyScanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetBodyScanning"></a>

```typescript
public resetBodyScanning(): void
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetCustomCertificate` <a name="resetCustomCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetCustomCertificate"></a>

```typescript
public resetCustomCertificate(): void
```

##### `resetExtendedEmailMatching` <a name="resetExtendedEmailMatching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetExtendedEmailMatching"></a>

```typescript
public resetExtendedEmailMatching(): void
```

##### `resetFips` <a name="resetFips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetFips"></a>

```typescript
public resetFips(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogging` <a name="resetLogging" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetLogging"></a>

```typescript
public resetLogging(): void
```

##### `resetNonIdentityBrowserIsolationEnabled` <a name="resetNonIdentityBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetNonIdentityBrowserIsolationEnabled"></a>

```typescript
public resetNonIdentityBrowserIsolationEnabled(): void
```

##### `resetPayloadLog` <a name="resetPayloadLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetPayloadLog"></a>

```typescript
public resetPayloadLog(): void
```

##### `resetProtocolDetectionEnabled` <a name="resetProtocolDetectionEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetProtocolDetectionEnabled"></a>

```typescript
public resetProtocolDetectionEnabled(): void
```

##### `resetProxy` <a name="resetProxy" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetProxy"></a>

```typescript
public resetProxy(): void
```

##### `resetSshSessionLog` <a name="resetSshSessionLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetSshSessionLog"></a>

```typescript
public resetSshSessionLog(): void
```

##### `resetTlsDecryptEnabled` <a name="resetTlsDecryptEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetTlsDecryptEnabled"></a>

```typescript
public resetTlsDecryptEnabled(): void
```

##### `resetUrlBrowserIsolationEnabled` <a name="resetUrlBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetUrlBrowserIsolationEnabled"></a>

```typescript
public resetUrlBrowserIsolationEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustGatewaySettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isConstruct"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformElement"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformResource"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generateConfigForImport"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZeroTrustGatewaySettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustGatewaySettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustGatewaySettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustGatewaySettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.antivirus">antivirus</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference">ZeroTrustGatewaySettingsAntivirusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.blockPage">blockPage</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference">ZeroTrustGatewaySettingsBlockPageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.bodyScanning">bodyScanning</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference">ZeroTrustGatewaySettingsBodyScanningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference">ZeroTrustGatewaySettingsCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.customCertificate">customCertificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference">ZeroTrustGatewaySettingsCustomCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.extendedEmailMatching">extendedEmailMatching</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference">ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.fips">fips</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference">ZeroTrustGatewaySettingsFipsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference">ZeroTrustGatewaySettingsLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.payloadLog">payloadLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference">ZeroTrustGatewaySettingsPayloadLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference">ZeroTrustGatewaySettingsProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.sshSessionLog">sshSessionLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference">ZeroTrustGatewaySettingsSshSessionLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.activityLogEnabledInput">activityLogEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.antivirusInput">antivirusInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.blockPageInput">blockPageInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.bodyScanningInput">bodyScanningInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.certificateInput">certificateInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.customCertificateInput">customCertificateInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.extendedEmailMatchingInput">extendedEmailMatchingInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.fipsInput">fipsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.loggingInput">loggingInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.nonIdentityBrowserIsolationEnabledInput">nonIdentityBrowserIsolationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.payloadLogInput">payloadLogInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.protocolDetectionEnabledInput">protocolDetectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.proxyInput">proxyInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.sshSessionLogInput">sshSessionLogInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.tlsDecryptEnabledInput">tlsDecryptEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.urlBrowserIsolationEnabledInput">urlBrowserIsolationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.activityLogEnabled">activityLogEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.nonIdentityBrowserIsolationEnabled">nonIdentityBrowserIsolationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.protocolDetectionEnabled">protocolDetectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.tlsDecryptEnabled">tlsDecryptEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.urlBrowserIsolationEnabled">urlBrowserIsolationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `antivirus`<sup>Required</sup> <a name="antivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.antivirus"></a>

```typescript
public readonly antivirus: ZeroTrustGatewaySettingsAntivirusOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference">ZeroTrustGatewaySettingsAntivirusOutputReference</a>

---

##### `blockPage`<sup>Required</sup> <a name="blockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.blockPage"></a>

```typescript
public readonly blockPage: ZeroTrustGatewaySettingsBlockPageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference">ZeroTrustGatewaySettingsBlockPageOutputReference</a>

---

##### `bodyScanning`<sup>Required</sup> <a name="bodyScanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.bodyScanning"></a>

```typescript
public readonly bodyScanning: ZeroTrustGatewaySettingsBodyScanningOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference">ZeroTrustGatewaySettingsBodyScanningOutputReference</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.certificate"></a>

```typescript
public readonly certificate: ZeroTrustGatewaySettingsCertificateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference">ZeroTrustGatewaySettingsCertificateOutputReference</a>

---

##### `customCertificate`<sup>Required</sup> <a name="customCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.customCertificate"></a>

```typescript
public readonly customCertificate: ZeroTrustGatewaySettingsCustomCertificateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference">ZeroTrustGatewaySettingsCustomCertificateOutputReference</a>

---

##### `extendedEmailMatching`<sup>Required</sup> <a name="extendedEmailMatching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.extendedEmailMatching"></a>

```typescript
public readonly extendedEmailMatching: ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference">ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference</a>

---

##### `fips`<sup>Required</sup> <a name="fips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.fips"></a>

```typescript
public readonly fips: ZeroTrustGatewaySettingsFipsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference">ZeroTrustGatewaySettingsFipsOutputReference</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.logging"></a>

```typescript
public readonly logging: ZeroTrustGatewaySettingsLoggingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference">ZeroTrustGatewaySettingsLoggingOutputReference</a>

---

##### `payloadLog`<sup>Required</sup> <a name="payloadLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.payloadLog"></a>

```typescript
public readonly payloadLog: ZeroTrustGatewaySettingsPayloadLogOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference">ZeroTrustGatewaySettingsPayloadLogOutputReference</a>

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.proxy"></a>

```typescript
public readonly proxy: ZeroTrustGatewaySettingsProxyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference">ZeroTrustGatewaySettingsProxyOutputReference</a>

---

##### `sshSessionLog`<sup>Required</sup> <a name="sshSessionLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.sshSessionLog"></a>

```typescript
public readonly sshSessionLog: ZeroTrustGatewaySettingsSshSessionLogOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference">ZeroTrustGatewaySettingsSshSessionLogOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `activityLogEnabledInput`<sup>Optional</sup> <a name="activityLogEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.activityLogEnabledInput"></a>

```typescript
public readonly activityLogEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `antivirusInput`<sup>Optional</sup> <a name="antivirusInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.antivirusInput"></a>

```typescript
public readonly antivirusInput: ZeroTrustGatewaySettingsAntivirus;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a>

---

##### `blockPageInput`<sup>Optional</sup> <a name="blockPageInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.blockPageInput"></a>

```typescript
public readonly blockPageInput: ZeroTrustGatewaySettingsBlockPage;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a>

---

##### `bodyScanningInput`<sup>Optional</sup> <a name="bodyScanningInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.bodyScanningInput"></a>

```typescript
public readonly bodyScanningInput: ZeroTrustGatewaySettingsBodyScanning;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.certificateInput"></a>

```typescript
public readonly certificateInput: ZeroTrustGatewaySettingsCertificate;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a>

---

##### `customCertificateInput`<sup>Optional</sup> <a name="customCertificateInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.customCertificateInput"></a>

```typescript
public readonly customCertificateInput: ZeroTrustGatewaySettingsCustomCertificate;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a>

---

##### `extendedEmailMatchingInput`<sup>Optional</sup> <a name="extendedEmailMatchingInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.extendedEmailMatchingInput"></a>

```typescript
public readonly extendedEmailMatchingInput: ZeroTrustGatewaySettingsExtendedEmailMatching;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a>

---

##### `fipsInput`<sup>Optional</sup> <a name="fipsInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.fipsInput"></a>

```typescript
public readonly fipsInput: ZeroTrustGatewaySettingsFips;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.loggingInput"></a>

```typescript
public readonly loggingInput: ZeroTrustGatewaySettingsLogging;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a>

---

##### `nonIdentityBrowserIsolationEnabledInput`<sup>Optional</sup> <a name="nonIdentityBrowserIsolationEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.nonIdentityBrowserIsolationEnabledInput"></a>

```typescript
public readonly nonIdentityBrowserIsolationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `payloadLogInput`<sup>Optional</sup> <a name="payloadLogInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.payloadLogInput"></a>

```typescript
public readonly payloadLogInput: ZeroTrustGatewaySettingsPayloadLog;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a>

---

##### `protocolDetectionEnabledInput`<sup>Optional</sup> <a name="protocolDetectionEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.protocolDetectionEnabledInput"></a>

```typescript
public readonly protocolDetectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `proxyInput`<sup>Optional</sup> <a name="proxyInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.proxyInput"></a>

```typescript
public readonly proxyInput: ZeroTrustGatewaySettingsProxy;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a>

---

##### `sshSessionLogInput`<sup>Optional</sup> <a name="sshSessionLogInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.sshSessionLogInput"></a>

```typescript
public readonly sshSessionLogInput: ZeroTrustGatewaySettingsSshSessionLog;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a>

---

##### `tlsDecryptEnabledInput`<sup>Optional</sup> <a name="tlsDecryptEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.tlsDecryptEnabledInput"></a>

```typescript
public readonly tlsDecryptEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `urlBrowserIsolationEnabledInput`<sup>Optional</sup> <a name="urlBrowserIsolationEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.urlBrowserIsolationEnabledInput"></a>

```typescript
public readonly urlBrowserIsolationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `activityLogEnabled`<sup>Required</sup> <a name="activityLogEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.activityLogEnabled"></a>

```typescript
public readonly activityLogEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nonIdentityBrowserIsolationEnabled`<sup>Required</sup> <a name="nonIdentityBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.nonIdentityBrowserIsolationEnabled"></a>

```typescript
public readonly nonIdentityBrowserIsolationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `protocolDetectionEnabled`<sup>Required</sup> <a name="protocolDetectionEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.protocolDetectionEnabled"></a>

```typescript
public readonly protocolDetectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsDecryptEnabled`<sup>Required</sup> <a name="tlsDecryptEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.tlsDecryptEnabled"></a>

```typescript
public readonly tlsDecryptEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `urlBrowserIsolationEnabled`<sup>Required</sup> <a name="urlBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.urlBrowserIsolationEnabled"></a>

```typescript
public readonly urlBrowserIsolationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustGatewaySettingsAntivirus <a name="ZeroTrustGatewaySettingsAntivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsAntivirus: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.enabledDownloadPhase">enabledDownloadPhase</a></code> | <code>boolean \| cdktf.IResolvable</code> | Scan on file download. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.enabledUploadPhase">enabledUploadPhase</a></code> | <code>boolean \| cdktf.IResolvable</code> | Scan on file upload. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.failClosed">failClosed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Block requests for files that cannot be scanned. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.notificationSettings">notificationSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a></code> | notification_settings block. |

---

##### `enabledDownloadPhase`<sup>Required</sup> <a name="enabledDownloadPhase" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.enabledDownloadPhase"></a>

```typescript
public readonly enabledDownloadPhase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Scan on file download.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#enabled_download_phase ZeroTrustGatewaySettings#enabled_download_phase}

---

##### `enabledUploadPhase`<sup>Required</sup> <a name="enabledUploadPhase" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.enabledUploadPhase"></a>

```typescript
public readonly enabledUploadPhase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Scan on file upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#enabled_upload_phase ZeroTrustGatewaySettings#enabled_upload_phase}

---

##### `failClosed`<sup>Required</sup> <a name="failClosed" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.failClosed"></a>

```typescript
public readonly failClosed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Block requests for files that cannot be scanned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#fail_closed ZeroTrustGatewaySettings#fail_closed}

---

##### `notificationSettings`<sup>Optional</sup> <a name="notificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.notificationSettings"></a>

```typescript
public readonly notificationSettings: ZeroTrustGatewaySettingsAntivirusNotificationSettings;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a>

notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#notification_settings ZeroTrustGatewaySettings#notification_settings}

---

### ZeroTrustGatewaySettingsAntivirusNotificationSettings <a name="ZeroTrustGatewaySettingsAntivirusNotificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsAntivirusNotificationSettings: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notification settings. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.property.message">message</a></code> | <code>string</code> | Notification content. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.property.supportUrl">supportUrl</a></code> | <code>string</code> | Support URL to show in the notification. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notification settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#message ZeroTrustGatewaySettings#message}

---

##### `supportUrl`<sup>Optional</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.property.supportUrl"></a>

```typescript
public readonly supportUrl: string;
```

- *Type:* string

Support URL to show in the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#support_url ZeroTrustGatewaySettings#support_url}

---

### ZeroTrustGatewaySettingsBlockPage <a name="ZeroTrustGatewaySettingsBlockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsBlockPage: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.backgroundColor">backgroundColor</a></code> | <code>string</code> | Hex code of block page background color. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicator of enablement. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.footerText">footerText</a></code> | <code>string</code> | Block page footer text. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.headerText">headerText</a></code> | <code>string</code> | Block page header text. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.logoPath">logoPath</a></code> | <code>string</code> | URL of block page logo. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.mailtoAddress">mailtoAddress</a></code> | <code>string</code> | Admin email for users to contact. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.mailtoSubject">mailtoSubject</a></code> | <code>string</code> | Subject line for emails created from block page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.name">name</a></code> | <code>string</code> | Name of block page configuration. |

---

##### `backgroundColor`<sup>Optional</sup> <a name="backgroundColor" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.backgroundColor"></a>

```typescript
public readonly backgroundColor: string;
```

- *Type:* string

Hex code of block page background color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#background_color ZeroTrustGatewaySettings#background_color}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicator of enablement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

##### `footerText`<sup>Optional</sup> <a name="footerText" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.footerText"></a>

```typescript
public readonly footerText: string;
```

- *Type:* string

Block page footer text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#footer_text ZeroTrustGatewaySettings#footer_text}

---

##### `headerText`<sup>Optional</sup> <a name="headerText" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.headerText"></a>

```typescript
public readonly headerText: string;
```

- *Type:* string

Block page header text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#header_text ZeroTrustGatewaySettings#header_text}

---

##### `logoPath`<sup>Optional</sup> <a name="logoPath" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.logoPath"></a>

```typescript
public readonly logoPath: string;
```

- *Type:* string

URL of block page logo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#logo_path ZeroTrustGatewaySettings#logo_path}

---

##### `mailtoAddress`<sup>Optional</sup> <a name="mailtoAddress" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.mailtoAddress"></a>

```typescript
public readonly mailtoAddress: string;
```

- *Type:* string

Admin email for users to contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#mailto_address ZeroTrustGatewaySettings#mailto_address}

---

##### `mailtoSubject`<sup>Optional</sup> <a name="mailtoSubject" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.mailtoSubject"></a>

```typescript
public readonly mailtoSubject: string;
```

- *Type:* string

Subject line for emails created from block page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#mailto_subject ZeroTrustGatewaySettings#mailto_subject}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of block page configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#name ZeroTrustGatewaySettings#name}

---

### ZeroTrustGatewaySettingsBodyScanning <a name="ZeroTrustGatewaySettingsBodyScanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsBodyScanning: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning.property.inspectionMode">inspectionMode</a></code> | <code>string</code> | Body scanning inspection mode. Available values: `deep`, `shallow`. |

---

##### `inspectionMode`<sup>Required</sup> <a name="inspectionMode" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning.property.inspectionMode"></a>

```typescript
public readonly inspectionMode: string;
```

- *Type:* string

Body scanning inspection mode. Available values: `deep`, `shallow`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#inspection_mode ZeroTrustGatewaySettings#inspection_mode}

---

### ZeroTrustGatewaySettingsCertificate <a name="ZeroTrustGatewaySettingsCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsCertificate: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate.property.id">id</a></code> | <code>string</code> | ID of certificate for TLS interception. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

ID of certificate for TLS interception.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ZeroTrustGatewaySettingsConfig <a name="ZeroTrustGatewaySettingsConfig" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsConfig: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.activityLogEnabled">activityLogEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable the activity log. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.antivirus">antivirus</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a></code> | antivirus block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.blockPage">blockPage</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a></code> | block_page block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.bodyScanning">bodyScanning</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a></code> | body_scanning block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a></code> | certificate block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.customCertificate">customCertificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a></code> | custom_certificate block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.extendedEmailMatching">extendedEmailMatching</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a></code> | extended_email_matching block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.fips">fips</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a></code> | fips block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.nonIdentityBrowserIsolationEnabled">nonIdentityBrowserIsolationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable non-identity onramp for Browser Isolation. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.payloadLog">payloadLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a></code> | payload_log block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.protocolDetectionEnabled">protocolDetectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicator that protocol detection is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a></code> | proxy block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.sshSessionLog">sshSessionLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a></code> | ssh_session_log block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.tlsDecryptEnabled">tlsDecryptEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicator that decryption of TLS traffic is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.urlBrowserIsolationEnabled">urlBrowserIsolationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Safely browse websites in Browser Isolation through a URL. Defaults to `false`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#account_id ZeroTrustGatewaySettings#account_id}

---

##### `activityLogEnabled`<sup>Optional</sup> <a name="activityLogEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.activityLogEnabled"></a>

```typescript
public readonly activityLogEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable the activity log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#activity_log_enabled ZeroTrustGatewaySettings#activity_log_enabled}

---

##### `antivirus`<sup>Optional</sup> <a name="antivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.antivirus"></a>

```typescript
public readonly antivirus: ZeroTrustGatewaySettingsAntivirus;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a>

antivirus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#antivirus ZeroTrustGatewaySettings#antivirus}

---

##### `blockPage`<sup>Optional</sup> <a name="blockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.blockPage"></a>

```typescript
public readonly blockPage: ZeroTrustGatewaySettingsBlockPage;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a>

block_page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#block_page ZeroTrustGatewaySettings#block_page}

---

##### `bodyScanning`<sup>Optional</sup> <a name="bodyScanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.bodyScanning"></a>

```typescript
public readonly bodyScanning: ZeroTrustGatewaySettingsBodyScanning;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a>

body_scanning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#body_scanning ZeroTrustGatewaySettings#body_scanning}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.certificate"></a>

```typescript
public readonly certificate: ZeroTrustGatewaySettingsCertificate;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a>

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#certificate ZeroTrustGatewaySettings#certificate}

---

##### `customCertificate`<sup>Optional</sup> <a name="customCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.customCertificate"></a>

```typescript
public readonly customCertificate: ZeroTrustGatewaySettingsCustomCertificate;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a>

custom_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#custom_certificate ZeroTrustGatewaySettings#custom_certificate}

---

##### `extendedEmailMatching`<sup>Optional</sup> <a name="extendedEmailMatching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.extendedEmailMatching"></a>

```typescript
public readonly extendedEmailMatching: ZeroTrustGatewaySettingsExtendedEmailMatching;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a>

extended_email_matching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#extended_email_matching ZeroTrustGatewaySettings#extended_email_matching}

---

##### `fips`<sup>Optional</sup> <a name="fips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.fips"></a>

```typescript
public readonly fips: ZeroTrustGatewaySettingsFips;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a>

fips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#fips ZeroTrustGatewaySettings#fips}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.logging"></a>

```typescript
public readonly logging: ZeroTrustGatewaySettingsLogging;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#logging ZeroTrustGatewaySettings#logging}

---

##### `nonIdentityBrowserIsolationEnabled`<sup>Optional</sup> <a name="nonIdentityBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.nonIdentityBrowserIsolationEnabled"></a>

```typescript
public readonly nonIdentityBrowserIsolationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable non-identity onramp for Browser Isolation. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#non_identity_browser_isolation_enabled ZeroTrustGatewaySettings#non_identity_browser_isolation_enabled}

---

##### `payloadLog`<sup>Optional</sup> <a name="payloadLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.payloadLog"></a>

```typescript
public readonly payloadLog: ZeroTrustGatewaySettingsPayloadLog;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a>

payload_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#payload_log ZeroTrustGatewaySettings#payload_log}

---

##### `protocolDetectionEnabled`<sup>Optional</sup> <a name="protocolDetectionEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.protocolDetectionEnabled"></a>

```typescript
public readonly protocolDetectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicator that protocol detection is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#protocol_detection_enabled ZeroTrustGatewaySettings#protocol_detection_enabled}

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.proxy"></a>

```typescript
public readonly proxy: ZeroTrustGatewaySettingsProxy;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#proxy ZeroTrustGatewaySettings#proxy}

---

##### `sshSessionLog`<sup>Optional</sup> <a name="sshSessionLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.sshSessionLog"></a>

```typescript
public readonly sshSessionLog: ZeroTrustGatewaySettingsSshSessionLog;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a>

ssh_session_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#ssh_session_log ZeroTrustGatewaySettings#ssh_session_log}

---

##### `tlsDecryptEnabled`<sup>Optional</sup> <a name="tlsDecryptEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.tlsDecryptEnabled"></a>

```typescript
public readonly tlsDecryptEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicator that decryption of TLS traffic is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#tls_decrypt_enabled ZeroTrustGatewaySettings#tls_decrypt_enabled}

---

##### `urlBrowserIsolationEnabled`<sup>Optional</sup> <a name="urlBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.urlBrowserIsolationEnabled"></a>

```typescript
public readonly urlBrowserIsolationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Safely browse websites in Browser Isolation through a URL. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#url_browser_isolation_enabled ZeroTrustGatewaySettings#url_browser_isolation_enabled}

---

### ZeroTrustGatewaySettingsCustomCertificate <a name="ZeroTrustGatewaySettingsCustomCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsCustomCertificate: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether TLS encryption should use a custom certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate.property.id">id</a></code> | <code>string</code> | ID of custom certificate. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether TLS encryption should use a custom certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

ID of custom certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ZeroTrustGatewaySettingsExtendedEmailMatching <a name="ZeroTrustGatewaySettingsExtendedEmailMatching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsExtendedEmailMatching: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether e-mails should be matched on all variants of user emails (with + or . modifiers) in Firewall policies. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether e-mails should be matched on all variants of user emails (with + or . modifiers) in Firewall policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

### ZeroTrustGatewaySettingsFips <a name="ZeroTrustGatewaySettingsFips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsFips: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips.property.tls">tls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Only allow FIPS-compliant TLS configuration. |

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips.property.tls"></a>

```typescript
public readonly tls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Only allow FIPS-compliant TLS configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#tls ZeroTrustGatewaySettings#tls}

---

### ZeroTrustGatewaySettingsLogging <a name="ZeroTrustGatewaySettingsLogging" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsLogging: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging.property.redactPii">redactPii</a></code> | <code>boolean \| cdktf.IResolvable</code> | Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent). |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging.property.settingsByRuleType">settingsByRuleType</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a></code> | settings_by_rule_type block. |

---

##### `redactPii`<sup>Required</sup> <a name="redactPii" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging.property.redactPii"></a>

```typescript
public readonly redactPii: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#redact_pii ZeroTrustGatewaySettings#redact_pii}

---

##### `settingsByRuleType`<sup>Required</sup> <a name="settingsByRuleType" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging.property.settingsByRuleType"></a>

```typescript
public readonly settingsByRuleType: ZeroTrustGatewaySettingsLoggingSettingsByRuleType;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a>

settings_by_rule_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#settings_by_rule_type ZeroTrustGatewaySettings#settings_by_rule_type}

---

### ZeroTrustGatewaySettingsLoggingSettingsByRuleType <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleType" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsLoggingSettingsByRuleType: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.property.http">http</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a></code> | http block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.property.l4">l4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a></code> | l4 block. |

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.property.dns"></a>

```typescript
public readonly dns: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#dns ZeroTrustGatewaySettings#dns}

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.property.http"></a>

```typescript
public readonly http: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#http ZeroTrustGatewaySettings#http}

---

##### `l4`<sup>Required</sup> <a name="l4" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.property.l4"></a>

```typescript
public readonly l4: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a>

l4 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#l4 ZeroTrustGatewaySettings#l4}

---

### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns.property.logAll">logAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns.property.logBlocks">logBlocks</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}. |

---

##### `logAll`<sup>Required</sup> <a name="logAll" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns.property.logAll"></a>

```typescript
public readonly logAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#log_all ZeroTrustGatewaySettings#log_all}

---

##### `logBlocks`<sup>Required</sup> <a name="logBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns.property.logBlocks"></a>

```typescript
public readonly logBlocks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}.

---

### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp.property.logAll">logAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp.property.logBlocks">logBlocks</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}. |

---

##### `logAll`<sup>Required</sup> <a name="logAll" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp.property.logAll"></a>

```typescript
public readonly logAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#log_all ZeroTrustGatewaySettings#log_all}

---

##### `logBlocks`<sup>Required</sup> <a name="logBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp.property.logBlocks"></a>

```typescript
public readonly logBlocks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}.

---

### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4 <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4.property.logAll">logAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4.property.logBlocks">logBlocks</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}. |

---

##### `logAll`<sup>Required</sup> <a name="logAll" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4.property.logAll"></a>

```typescript
public readonly logAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#log_all ZeroTrustGatewaySettings#log_all}

---

##### `logBlocks`<sup>Required</sup> <a name="logBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4.property.logBlocks"></a>

```typescript
public readonly logBlocks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}.

---

### ZeroTrustGatewaySettingsPayloadLog <a name="ZeroTrustGatewaySettingsPayloadLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsPayloadLog: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog.property.publicKey">publicKey</a></code> | <code>string</code> | Public key used to encrypt matched payloads. |

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

Public key used to encrypt matched payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#public_key ZeroTrustGatewaySettings#public_key}

---

### ZeroTrustGatewaySettingsProxy <a name="ZeroTrustGatewaySettingsProxy" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsProxy: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.disableForTime">disableForTime</a></code> | <code>number</code> | Sets the time limit in seconds that a user can use an override code to bypass WARP. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.rootCa">rootCa</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether root ca is enabled account wide for ZT clients. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.tcp">tcp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether gateway proxy is enabled on gateway devices for TCP traffic. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.udp">udp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether gateway proxy is enabled on gateway devices for UDP traffic. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.virtualIp">virtualIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether virtual IP (CGNAT) is enabled account wide and will override existing local interface IP for ZT clients. |

---

##### `disableForTime`<sup>Required</sup> <a name="disableForTime" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.disableForTime"></a>

```typescript
public readonly disableForTime: number;
```

- *Type:* number

Sets the time limit in seconds that a user can use an override code to bypass WARP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#disable_for_time ZeroTrustGatewaySettings#disable_for_time}

---

##### `rootCa`<sup>Required</sup> <a name="rootCa" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.rootCa"></a>

```typescript
public readonly rootCa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether root ca is enabled account wide for ZT clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#root_ca ZeroTrustGatewaySettings#root_ca}

---

##### `tcp`<sup>Required</sup> <a name="tcp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.tcp"></a>

```typescript
public readonly tcp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether gateway proxy is enabled on gateway devices for TCP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#tcp ZeroTrustGatewaySettings#tcp}

---

##### `udp`<sup>Required</sup> <a name="udp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.udp"></a>

```typescript
public readonly udp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether gateway proxy is enabled on gateway devices for UDP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#udp ZeroTrustGatewaySettings#udp}

---

##### `virtualIp`<sup>Required</sup> <a name="virtualIp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.virtualIp"></a>

```typescript
public readonly virtualIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether virtual IP (CGNAT) is enabled account wide and will override existing local interface IP for ZT clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#virtual_ip ZeroTrustGatewaySettings#virtual_ip}

---

### ZeroTrustGatewaySettingsSshSessionLog <a name="ZeroTrustGatewaySettingsSshSessionLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsSshSessionLog: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog.property.publicKey">publicKey</a></code> | <code>string</code> | Public key used to encrypt ssh session. |

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

Public key used to encrypt ssh session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_gateway_settings#public_key ZeroTrustGatewaySettings#public_key}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference <a name="ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resetSupportUrl">resetSupportUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetMessage` <a name="resetMessage" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetSupportUrl` <a name="resetSupportUrl" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resetSupportUrl"></a>

```typescript
public resetSupportUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.supportUrlInput">supportUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.supportUrl">supportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `supportUrlInput`<sup>Optional</sup> <a name="supportUrlInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.supportUrlInput"></a>

```typescript
public readonly supportUrlInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `supportUrl`<sup>Required</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.supportUrl"></a>

```typescript
public readonly supportUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustGatewaySettingsAntivirusNotificationSettings;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a>

---


### ZeroTrustGatewaySettingsAntivirusOutputReference <a name="ZeroTrustGatewaySettingsAntivirusOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.putNotificationSettings">putNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.resetNotificationSettings">resetNotificationSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNotificationSettings` <a name="putNotificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.putNotificationSettings"></a>

```typescript
public putNotificationSettings(value: ZeroTrustGatewaySettingsAntivirusNotificationSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.putNotificationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a>

---

##### `resetNotificationSettings` <a name="resetNotificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.resetNotificationSettings"></a>

```typescript
public resetNotificationSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.notificationSettings">notificationSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference">ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledDownloadPhaseInput">enabledDownloadPhaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledUploadPhaseInput">enabledUploadPhaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.failClosedInput">failClosedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.notificationSettingsInput">notificationSettingsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledDownloadPhase">enabledDownloadPhase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledUploadPhase">enabledUploadPhase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.failClosed">failClosed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notificationSettings`<sup>Required</sup> <a name="notificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.notificationSettings"></a>

```typescript
public readonly notificationSettings: ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference">ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference</a>

---

##### `enabledDownloadPhaseInput`<sup>Optional</sup> <a name="enabledDownloadPhaseInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledDownloadPhaseInput"></a>

```typescript
public readonly enabledDownloadPhaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledUploadPhaseInput`<sup>Optional</sup> <a name="enabledUploadPhaseInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledUploadPhaseInput"></a>

```typescript
public readonly enabledUploadPhaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failClosedInput`<sup>Optional</sup> <a name="failClosedInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.failClosedInput"></a>

```typescript
public readonly failClosedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notificationSettingsInput`<sup>Optional</sup> <a name="notificationSettingsInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.notificationSettingsInput"></a>

```typescript
public readonly notificationSettingsInput: ZeroTrustGatewaySettingsAntivirusNotificationSettings;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a>

---

##### `enabledDownloadPhase`<sup>Required</sup> <a name="enabledDownloadPhase" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledDownloadPhase"></a>

```typescript
public readonly enabledDownloadPhase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledUploadPhase`<sup>Required</sup> <a name="enabledUploadPhase" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledUploadPhase"></a>

```typescript
public readonly enabledUploadPhase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failClosed`<sup>Required</sup> <a name="failClosed" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.failClosed"></a>

```typescript
public readonly failClosed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustGatewaySettingsAntivirus;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a>

---


### ZeroTrustGatewaySettingsBlockPageOutputReference <a name="ZeroTrustGatewaySettingsBlockPageOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetBackgroundColor">resetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetFooterText">resetFooterText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetHeaderText">resetHeaderText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetLogoPath">resetLogoPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetMailtoAddress">resetMailtoAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetMailtoSubject">resetMailtoSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackgroundColor` <a name="resetBackgroundColor" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetBackgroundColor"></a>

```typescript
public resetBackgroundColor(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFooterText` <a name="resetFooterText" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetFooterText"></a>

```typescript
public resetFooterText(): void
```

##### `resetHeaderText` <a name="resetHeaderText" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetHeaderText"></a>

```typescript
public resetHeaderText(): void
```

##### `resetLogoPath` <a name="resetLogoPath" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetLogoPath"></a>

```typescript
public resetLogoPath(): void
```

##### `resetMailtoAddress` <a name="resetMailtoAddress" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetMailtoAddress"></a>

```typescript
public resetMailtoAddress(): void
```

##### `resetMailtoSubject` <a name="resetMailtoSubject" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetMailtoSubject"></a>

```typescript
public resetMailtoSubject(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.backgroundColorInput">backgroundColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.footerTextInput">footerTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.headerTextInput">headerTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.logoPathInput">logoPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoAddressInput">mailtoAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoSubjectInput">mailtoSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.backgroundColor">backgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.footerText">footerText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.headerText">headerText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.logoPath">logoPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoAddress">mailtoAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoSubject">mailtoSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backgroundColorInput`<sup>Optional</sup> <a name="backgroundColorInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.backgroundColorInput"></a>

```typescript
public readonly backgroundColorInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `footerTextInput`<sup>Optional</sup> <a name="footerTextInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.footerTextInput"></a>

```typescript
public readonly footerTextInput: string;
```

- *Type:* string

---

##### `headerTextInput`<sup>Optional</sup> <a name="headerTextInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.headerTextInput"></a>

```typescript
public readonly headerTextInput: string;
```

- *Type:* string

---

##### `logoPathInput`<sup>Optional</sup> <a name="logoPathInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.logoPathInput"></a>

```typescript
public readonly logoPathInput: string;
```

- *Type:* string

---

##### `mailtoAddressInput`<sup>Optional</sup> <a name="mailtoAddressInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoAddressInput"></a>

```typescript
public readonly mailtoAddressInput: string;
```

- *Type:* string

---

##### `mailtoSubjectInput`<sup>Optional</sup> <a name="mailtoSubjectInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoSubjectInput"></a>

```typescript
public readonly mailtoSubjectInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `backgroundColor`<sup>Required</sup> <a name="backgroundColor" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.backgroundColor"></a>

```typescript
public readonly backgroundColor: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `footerText`<sup>Required</sup> <a name="footerText" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.footerText"></a>

```typescript
public readonly footerText: string;
```

- *Type:* string

---

##### `headerText`<sup>Required</sup> <a name="headerText" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.headerText"></a>

```typescript
public readonly headerText: string;
```

- *Type:* string

---

##### `logoPath`<sup>Required</sup> <a name="logoPath" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.logoPath"></a>

```typescript
public readonly logoPath: string;
```

- *Type:* string

---

##### `mailtoAddress`<sup>Required</sup> <a name="mailtoAddress" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoAddress"></a>

```typescript
public readonly mailtoAddress: string;
```

- *Type:* string

---

##### `mailtoSubject`<sup>Required</sup> <a name="mailtoSubject" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoSubject"></a>

```typescript
public readonly mailtoSubject: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustGatewaySettingsBlockPage;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a>

---


### ZeroTrustGatewaySettingsBodyScanningOutputReference <a name="ZeroTrustGatewaySettingsBodyScanningOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.inspectionModeInput">inspectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.inspectionMode">inspectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inspectionModeInput`<sup>Optional</sup> <a name="inspectionModeInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.inspectionModeInput"></a>

```typescript
public readonly inspectionModeInput: string;
```

- *Type:* string

---

##### `inspectionMode`<sup>Required</sup> <a name="inspectionMode" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.inspectionMode"></a>

```typescript
public readonly inspectionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustGatewaySettingsBodyScanning;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a>

---


### ZeroTrustGatewaySettingsCertificateOutputReference <a name="ZeroTrustGatewaySettingsCertificateOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustGatewaySettingsCertificate;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a>

---


### ZeroTrustGatewaySettingsCustomCertificateOutputReference <a name="ZeroTrustGatewaySettingsCustomCertificateOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.resetId"></a>

```typescript
public resetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustGatewaySettingsCustomCertificate;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a>

---


### ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference <a name="ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustGatewaySettingsExtendedEmailMatching;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a>

---


### ZeroTrustGatewaySettingsFipsOutputReference <a name="ZeroTrustGatewaySettingsFipsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.resetTls">resetTls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTls` <a name="resetTls" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.resetTls"></a>

```typescript
public resetTls(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.tlsInput">tlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.tls">tls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.tlsInput"></a>

```typescript
public readonly tlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.tls"></a>

```typescript
public readonly tls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustGatewaySettingsFips;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a>

---


### ZeroTrustGatewaySettingsLoggingOutputReference <a name="ZeroTrustGatewaySettingsLoggingOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.putSettingsByRuleType">putSettingsByRuleType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettingsByRuleType` <a name="putSettingsByRuleType" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.putSettingsByRuleType"></a>

```typescript
public putSettingsByRuleType(value: ZeroTrustGatewaySettingsLoggingSettingsByRuleType): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.putSettingsByRuleType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.settingsByRuleType">settingsByRuleType</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.redactPiiInput">redactPiiInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.settingsByRuleTypeInput">settingsByRuleTypeInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.redactPii">redactPii</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `settingsByRuleType`<sup>Required</sup> <a name="settingsByRuleType" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.settingsByRuleType"></a>

```typescript
public readonly settingsByRuleType: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference</a>

---

##### `redactPiiInput`<sup>Optional</sup> <a name="redactPiiInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.redactPiiInput"></a>

```typescript
public readonly redactPiiInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `settingsByRuleTypeInput`<sup>Optional</sup> <a name="settingsByRuleTypeInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.settingsByRuleTypeInput"></a>

```typescript
public readonly settingsByRuleTypeInput: ZeroTrustGatewaySettingsLoggingSettingsByRuleType;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a>

---

##### `redactPii`<sup>Required</sup> <a name="redactPii" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.redactPii"></a>

```typescript
public readonly redactPii: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustGatewaySettingsLogging;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a>

---


### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logAllInput">logAllInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocksInput">logBlocksInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logAll">logAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocks">logBlocks</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logAllInput`<sup>Optional</sup> <a name="logAllInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logAllInput"></a>

```typescript
public readonly logAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logBlocksInput`<sup>Optional</sup> <a name="logBlocksInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocksInput"></a>

```typescript
public readonly logBlocksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logAll`<sup>Required</sup> <a name="logAll" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logAll"></a>

```typescript
public readonly logAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logBlocks`<sup>Required</sup> <a name="logBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocks"></a>

```typescript
public readonly logBlocks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a>

---


### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logAllInput">logAllInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocksInput">logBlocksInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logAll">logAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocks">logBlocks</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logAllInput`<sup>Optional</sup> <a name="logAllInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logAllInput"></a>

```typescript
public readonly logAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logBlocksInput`<sup>Optional</sup> <a name="logBlocksInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocksInput"></a>

```typescript
public readonly logBlocksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logAll`<sup>Required</sup> <a name="logAll" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logAll"></a>

```typescript
public readonly logAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logBlocks`<sup>Required</sup> <a name="logBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocks"></a>

```typescript
public readonly logBlocks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a>

---


### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logAllInput">logAllInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logBlocksInput">logBlocksInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logAll">logAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logBlocks">logBlocks</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logAllInput`<sup>Optional</sup> <a name="logAllInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logAllInput"></a>

```typescript
public readonly logAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logBlocksInput`<sup>Optional</sup> <a name="logBlocksInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logBlocksInput"></a>

```typescript
public readonly logBlocksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logAll`<sup>Required</sup> <a name="logAll" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logAll"></a>

```typescript
public readonly logAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logBlocks`<sup>Required</sup> <a name="logBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logBlocks"></a>

```typescript
public readonly logBlocks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a>

---


### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putDns">putDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putHttp">putHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putL4">putL4</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDns` <a name="putDns" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putDns"></a>

```typescript
public putDns(value: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a>

---

##### `putHttp` <a name="putHttp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putHttp"></a>

```typescript
public putHttp(value: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a>

---

##### `putL4` <a name="putL4" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putL4"></a>

```typescript
public putL4(value: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putL4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.http">http</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.l4">l4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.dnsInput">dnsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.httpInput">httpInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.l4Input">l4Input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.dns"></a>

```typescript
public readonly dns: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference</a>

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.http"></a>

```typescript
public readonly http: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference</a>

---

##### `l4`<sup>Required</sup> <a name="l4" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.l4"></a>

```typescript
public readonly l4: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference</a>

---

##### `dnsInput`<sup>Optional</sup> <a name="dnsInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.dnsInput"></a>

```typescript
public readonly dnsInput: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a>

---

##### `httpInput`<sup>Optional</sup> <a name="httpInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.httpInput"></a>

```typescript
public readonly httpInput: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a>

---

##### `l4Input`<sup>Optional</sup> <a name="l4Input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.l4Input"></a>

```typescript
public readonly l4Input: ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustGatewaySettingsLoggingSettingsByRuleType;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a>

---


### ZeroTrustGatewaySettingsPayloadLogOutputReference <a name="ZeroTrustGatewaySettingsPayloadLogOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.publicKeyInput">publicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.publicKeyInput"></a>

```typescript
public readonly publicKeyInput: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustGatewaySettingsPayloadLog;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a>

---


### ZeroTrustGatewaySettingsProxyOutputReference <a name="ZeroTrustGatewaySettingsProxyOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.disableForTimeInput">disableForTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.rootCaInput">rootCaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.tcpInput">tcpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.udpInput">udpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.virtualIpInput">virtualIpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.disableForTime">disableForTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.rootCa">rootCa</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.tcp">tcp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.udp">udp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.virtualIp">virtualIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disableForTimeInput`<sup>Optional</sup> <a name="disableForTimeInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.disableForTimeInput"></a>

```typescript
public readonly disableForTimeInput: number;
```

- *Type:* number

---

##### `rootCaInput`<sup>Optional</sup> <a name="rootCaInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.rootCaInput"></a>

```typescript
public readonly rootCaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tcpInput`<sup>Optional</sup> <a name="tcpInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.tcpInput"></a>

```typescript
public readonly tcpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `udpInput`<sup>Optional</sup> <a name="udpInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.udpInput"></a>

```typescript
public readonly udpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `virtualIpInput`<sup>Optional</sup> <a name="virtualIpInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.virtualIpInput"></a>

```typescript
public readonly virtualIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableForTime`<sup>Required</sup> <a name="disableForTime" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.disableForTime"></a>

```typescript
public readonly disableForTime: number;
```

- *Type:* number

---

##### `rootCa`<sup>Required</sup> <a name="rootCa" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.rootCa"></a>

```typescript
public readonly rootCa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tcp`<sup>Required</sup> <a name="tcp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.tcp"></a>

```typescript
public readonly tcp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `udp`<sup>Required</sup> <a name="udp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.udp"></a>

```typescript
public readonly udp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `virtualIp`<sup>Required</sup> <a name="virtualIp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.virtualIp"></a>

```typescript
public readonly virtualIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustGatewaySettingsProxy;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a>

---


### ZeroTrustGatewaySettingsSshSessionLogOutputReference <a name="ZeroTrustGatewaySettingsSshSessionLogOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.publicKeyInput">publicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.publicKeyInput"></a>

```typescript
public readonly publicKeyInput: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ZeroTrustGatewaySettingsSshSessionLog;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a>

---



