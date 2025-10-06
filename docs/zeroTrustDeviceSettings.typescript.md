# `zeroTrustDeviceSettings` Submodule <a name="`zeroTrustDeviceSettings` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDeviceSettings <a name="ZeroTrustDeviceSettings" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_settings cloudflare_zero_trust_device_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer"></a>

```typescript
import { zeroTrustDeviceSettings } from '@cdktf/provider-cloudflare'

new zeroTrustDeviceSettings.ZeroTrustDeviceSettings(scope: Construct, id: string, config: ZeroTrustDeviceSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig">ZeroTrustDeviceSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig">ZeroTrustDeviceSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetDisableForTime">resetDisableForTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetGatewayProxyEnabled">resetGatewayProxyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetGatewayUdpProxyEnabled">resetGatewayUdpProxyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetRootCertificateInstallationEnabled">resetRootCertificateInstallationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetUseZtVirtualIp">resetUseZtVirtualIp</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDisableForTime` <a name="resetDisableForTime" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetDisableForTime"></a>

```typescript
public resetDisableForTime(): void
```

##### `resetGatewayProxyEnabled` <a name="resetGatewayProxyEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetGatewayProxyEnabled"></a>

```typescript
public resetGatewayProxyEnabled(): void
```

##### `resetGatewayUdpProxyEnabled` <a name="resetGatewayUdpProxyEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetGatewayUdpProxyEnabled"></a>

```typescript
public resetGatewayUdpProxyEnabled(): void
```

##### `resetRootCertificateInstallationEnabled` <a name="resetRootCertificateInstallationEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetRootCertificateInstallationEnabled"></a>

```typescript
public resetRootCertificateInstallationEnabled(): void
```

##### `resetUseZtVirtualIp` <a name="resetUseZtVirtualIp" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.resetUseZtVirtualIp"></a>

```typescript
public resetUseZtVirtualIp(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDeviceSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isConstruct"></a>

```typescript
import { zeroTrustDeviceSettings } from '@cdktf/provider-cloudflare'

zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isTerraformElement"></a>

```typescript
import { zeroTrustDeviceSettings } from '@cdktf/provider-cloudflare'

zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isTerraformResource"></a>

```typescript
import { zeroTrustDeviceSettings } from '@cdktf/provider-cloudflare'

zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.generateConfigForImport"></a>

```typescript
import { zeroTrustDeviceSettings } from '@cdktf/provider-cloudflare'

zeroTrustDeviceSettings.ZeroTrustDeviceSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZeroTrustDeviceSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustDeviceSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustDeviceSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDeviceSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.disableForTimeInput">disableForTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.gatewayProxyEnabledInput">gatewayProxyEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.gatewayUdpProxyEnabledInput">gatewayUdpProxyEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.rootCertificateInstallationEnabledInput">rootCertificateInstallationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.useZtVirtualIpInput">useZtVirtualIpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.disableForTime">disableForTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.gatewayProxyEnabled">gatewayProxyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.gatewayUdpProxyEnabled">gatewayUdpProxyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.rootCertificateInstallationEnabled">rootCertificateInstallationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.useZtVirtualIp">useZtVirtualIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `disableForTimeInput`<sup>Optional</sup> <a name="disableForTimeInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.disableForTimeInput"></a>

```typescript
public readonly disableForTimeInput: number;
```

- *Type:* number

---

##### `gatewayProxyEnabledInput`<sup>Optional</sup> <a name="gatewayProxyEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.gatewayProxyEnabledInput"></a>

```typescript
public readonly gatewayProxyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gatewayUdpProxyEnabledInput`<sup>Optional</sup> <a name="gatewayUdpProxyEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.gatewayUdpProxyEnabledInput"></a>

```typescript
public readonly gatewayUdpProxyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rootCertificateInstallationEnabledInput`<sup>Optional</sup> <a name="rootCertificateInstallationEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.rootCertificateInstallationEnabledInput"></a>

```typescript
public readonly rootCertificateInstallationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useZtVirtualIpInput`<sup>Optional</sup> <a name="useZtVirtualIpInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.useZtVirtualIpInput"></a>

```typescript
public readonly useZtVirtualIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `disableForTime`<sup>Required</sup> <a name="disableForTime" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.disableForTime"></a>

```typescript
public readonly disableForTime: number;
```

- *Type:* number

---

##### `gatewayProxyEnabled`<sup>Required</sup> <a name="gatewayProxyEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.gatewayProxyEnabled"></a>

```typescript
public readonly gatewayProxyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gatewayUdpProxyEnabled`<sup>Required</sup> <a name="gatewayUdpProxyEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.gatewayUdpProxyEnabled"></a>

```typescript
public readonly gatewayUdpProxyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rootCertificateInstallationEnabled`<sup>Required</sup> <a name="rootCertificateInstallationEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.rootCertificateInstallationEnabled"></a>

```typescript
public readonly rootCertificateInstallationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useZtVirtualIp`<sup>Required</sup> <a name="useZtVirtualIp" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.useZtVirtualIp"></a>

```typescript
public readonly useZtVirtualIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDeviceSettingsConfig <a name="ZeroTrustDeviceSettingsConfig" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.Initializer"></a>

```typescript
import { zeroTrustDeviceSettings } from '@cdktf/provider-cloudflare'

const zeroTrustDeviceSettingsConfig: zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_settings#account_id ZeroTrustDeviceSettings#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.disableForTime">disableForTime</a></code> | <code>number</code> | Sets the time limit, in seconds, that a user can use an override code to bypass WARP. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.gatewayProxyEnabled">gatewayProxyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable gateway proxy filtering on TCP. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.gatewayUdpProxyEnabled">gatewayUdpProxyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable gateway proxy filtering on UDP. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.rootCertificateInstallationEnabled">rootCertificateInstallationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable installation of cloudflare managed root certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.useZtVirtualIp">useZtVirtualIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable using CGNAT virtual IPv4. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_settings#account_id ZeroTrustDeviceSettings#account_id}.

---

##### `disableForTime`<sup>Optional</sup> <a name="disableForTime" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.disableForTime"></a>

```typescript
public readonly disableForTime: number;
```

- *Type:* number

Sets the time limit, in seconds, that a user can use an override code to bypass WARP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_settings#disable_for_time ZeroTrustDeviceSettings#disable_for_time}

---

##### `gatewayProxyEnabled`<sup>Optional</sup> <a name="gatewayProxyEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.gatewayProxyEnabled"></a>

```typescript
public readonly gatewayProxyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable gateway proxy filtering on TCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_settings#gateway_proxy_enabled ZeroTrustDeviceSettings#gateway_proxy_enabled}

---

##### `gatewayUdpProxyEnabled`<sup>Optional</sup> <a name="gatewayUdpProxyEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.gatewayUdpProxyEnabled"></a>

```typescript
public readonly gatewayUdpProxyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable gateway proxy filtering on UDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_settings#gateway_udp_proxy_enabled ZeroTrustDeviceSettings#gateway_udp_proxy_enabled}

---

##### `rootCertificateInstallationEnabled`<sup>Optional</sup> <a name="rootCertificateInstallationEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.rootCertificateInstallationEnabled"></a>

```typescript
public readonly rootCertificateInstallationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable installation of cloudflare managed root certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_settings#root_certificate_installation_enabled ZeroTrustDeviceSettings#root_certificate_installation_enabled}

---

##### `useZtVirtualIp`<sup>Optional</sup> <a name="useZtVirtualIp" id="@cdktf/provider-cloudflare.zeroTrustDeviceSettings.ZeroTrustDeviceSettingsConfig.property.useZtVirtualIp"></a>

```typescript
public readonly useZtVirtualIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable using CGNAT virtual IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_settings#use_zt_virtual_ip ZeroTrustDeviceSettings#use_zt_virtual_ip}

---



