# `zeroTrustGatewaySettings` Submodule <a name="`zeroTrustGatewaySettings` Submodule" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustGatewaySettings <a name="ZeroTrustGatewaySettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings cloudflare_zero_trust_gateway_settings}.

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
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetSettings">resetSettings</a></code> | *No description.* |

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

##### `putSettings` <a name="putSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putSettings"></a>

```typescript
public putSettings(value: ZeroTrustGatewaySettingsSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings">ZeroTrustGatewaySettingsSettings</a>

---

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetSettings"></a>

```typescript
public resetSettings(): void
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

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference">ZeroTrustGatewaySettingsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.settingsInput">settingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings">ZeroTrustGatewaySettingsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |

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
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.settings"></a>

```typescript
public readonly settings: ZeroTrustGatewaySettingsSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference">ZeroTrustGatewaySettingsSettingsOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | ZeroTrustGatewaySettingsSettings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings">ZeroTrustGatewaySettingsSettings</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

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
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#account_id ZeroTrustGatewaySettings#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings">ZeroTrustGatewaySettingsSettings</a></code> | Specify account settings. |

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
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#account_id ZeroTrustGatewaySettings#account_id}.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.settings"></a>

```typescript
public readonly settings: ZeroTrustGatewaySettingsSettings;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings">ZeroTrustGatewaySettingsSettings</a>

Specify account settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#settings ZeroTrustGatewaySettings#settings}

---

### ZeroTrustGatewaySettingsSettings <a name="ZeroTrustGatewaySettingsSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsSettings: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.activityLog">activityLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLog">ZeroTrustGatewaySettingsSettingsActivityLog</a></code> | Specify activity log settings. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.antivirus">antivirus</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirus">ZeroTrustGatewaySettingsSettingsAntivirus</a></code> | Specify anti-virus settings. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.blockPage">blockPage</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage">ZeroTrustGatewaySettingsSettingsBlockPage</a></code> | Specify block page layout settings. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.bodyScanning">bodyScanning</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanning">ZeroTrustGatewaySettingsSettingsBodyScanning</a></code> | Specify the DLP inspection mode. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.browserIsolation">browserIsolation</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolation">ZeroTrustGatewaySettingsSettingsBrowserIsolation</a></code> | Specify Clientless Browser Isolation settings. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificate">ZeroTrustGatewaySettingsSettingsCertificate</a></code> | Specify certificate settings for Gateway TLS interception. If unset, the Cloudflare Root CA handles interception. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.customCertificate">customCertificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificate">ZeroTrustGatewaySettingsSettingsCustomCertificate</a></code> | Specify custom certificate settings for BYO-PKI. This field is deprecated; use `certificate` instead. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.extendedEmailMatching">extendedEmailMatching</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatching">ZeroTrustGatewaySettingsSettingsExtendedEmailMatching</a></code> | Configures user email settings for firewall policies. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.fips">fips</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFips">ZeroTrustGatewaySettingsSettingsFips</a></code> | Specify FIPS settings. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.hostSelector">hostSelector</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelector">ZeroTrustGatewaySettingsSettingsHostSelector</a></code> | Enable host selection in egress policies. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.inspection">inspection</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspection">ZeroTrustGatewaySettingsSettingsInspection</a></code> | Define the proxy inspection mode. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.protocolDetection">protocolDetection</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetection">ZeroTrustGatewaySettingsSettingsProtocolDetection</a></code> | Specify whether to detect protocols from the initial bytes of client traffic. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.sandbox">sandbox</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandbox">ZeroTrustGatewaySettingsSettingsSandbox</a></code> | Specify whether to enable the sandbox. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.tlsDecrypt">tlsDecrypt</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecrypt">ZeroTrustGatewaySettingsSettingsTlsDecrypt</a></code> | Specify whether to inspect encrypted HTTP traffic. |

---

##### `activityLog`<sup>Optional</sup> <a name="activityLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.activityLog"></a>

```typescript
public readonly activityLog: ZeroTrustGatewaySettingsSettingsActivityLog;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLog">ZeroTrustGatewaySettingsSettingsActivityLog</a>

Specify activity log settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#activity_log ZeroTrustGatewaySettings#activity_log}

---

##### `antivirus`<sup>Optional</sup> <a name="antivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.antivirus"></a>

```typescript
public readonly antivirus: ZeroTrustGatewaySettingsSettingsAntivirus;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirus">ZeroTrustGatewaySettingsSettingsAntivirus</a>

Specify anti-virus settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#antivirus ZeroTrustGatewaySettings#antivirus}

---

##### `blockPage`<sup>Optional</sup> <a name="blockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.blockPage"></a>

```typescript
public readonly blockPage: ZeroTrustGatewaySettingsSettingsBlockPage;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage">ZeroTrustGatewaySettingsSettingsBlockPage</a>

Specify block page layout settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#block_page ZeroTrustGatewaySettings#block_page}

---

##### `bodyScanning`<sup>Optional</sup> <a name="bodyScanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.bodyScanning"></a>

```typescript
public readonly bodyScanning: ZeroTrustGatewaySettingsSettingsBodyScanning;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanning">ZeroTrustGatewaySettingsSettingsBodyScanning</a>

Specify the DLP inspection mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#body_scanning ZeroTrustGatewaySettings#body_scanning}

---

##### `browserIsolation`<sup>Optional</sup> <a name="browserIsolation" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.browserIsolation"></a>

```typescript
public readonly browserIsolation: ZeroTrustGatewaySettingsSettingsBrowserIsolation;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolation">ZeroTrustGatewaySettingsSettingsBrowserIsolation</a>

Specify Clientless Browser Isolation settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#browser_isolation ZeroTrustGatewaySettings#browser_isolation}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.certificate"></a>

```typescript
public readonly certificate: ZeroTrustGatewaySettingsSettingsCertificate;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificate">ZeroTrustGatewaySettingsSettingsCertificate</a>

Specify certificate settings for Gateway TLS interception. If unset, the Cloudflare Root CA handles interception.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#certificate ZeroTrustGatewaySettings#certificate}

---

##### `customCertificate`<sup>Optional</sup> <a name="customCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.customCertificate"></a>

```typescript
public readonly customCertificate: ZeroTrustGatewaySettingsSettingsCustomCertificate;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificate">ZeroTrustGatewaySettingsSettingsCustomCertificate</a>

Specify custom certificate settings for BYO-PKI. This field is deprecated; use `certificate` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#custom_certificate ZeroTrustGatewaySettings#custom_certificate}

---

##### `extendedEmailMatching`<sup>Optional</sup> <a name="extendedEmailMatching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.extendedEmailMatching"></a>

```typescript
public readonly extendedEmailMatching: ZeroTrustGatewaySettingsSettingsExtendedEmailMatching;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatching">ZeroTrustGatewaySettingsSettingsExtendedEmailMatching</a>

Configures user email settings for firewall policies.

When you enable this, the system standardizes email addresses in the identity portion of the rule to match extended email variants in firewall policies. When you disable this setting, the system matches email addresses exactly as you provide them. Enable this setting if your email uses `.` or `+` modifiers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#extended_email_matching ZeroTrustGatewaySettings#extended_email_matching}

---

##### `fips`<sup>Optional</sup> <a name="fips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.fips"></a>

```typescript
public readonly fips: ZeroTrustGatewaySettingsSettingsFips;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFips">ZeroTrustGatewaySettingsSettingsFips</a>

Specify FIPS settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#fips ZeroTrustGatewaySettings#fips}

---

##### `hostSelector`<sup>Optional</sup> <a name="hostSelector" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.hostSelector"></a>

```typescript
public readonly hostSelector: ZeroTrustGatewaySettingsSettingsHostSelector;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelector">ZeroTrustGatewaySettingsSettingsHostSelector</a>

Enable host selection in egress policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#host_selector ZeroTrustGatewaySettings#host_selector}

---

##### `inspection`<sup>Optional</sup> <a name="inspection" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.inspection"></a>

```typescript
public readonly inspection: ZeroTrustGatewaySettingsSettingsInspection;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspection">ZeroTrustGatewaySettingsSettingsInspection</a>

Define the proxy inspection mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#inspection ZeroTrustGatewaySettings#inspection}

---

##### `protocolDetection`<sup>Optional</sup> <a name="protocolDetection" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.protocolDetection"></a>

```typescript
public readonly protocolDetection: ZeroTrustGatewaySettingsSettingsProtocolDetection;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetection">ZeroTrustGatewaySettingsSettingsProtocolDetection</a>

Specify whether to detect protocols from the initial bytes of client traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#protocol_detection ZeroTrustGatewaySettings#protocol_detection}

---

##### `sandbox`<sup>Optional</sup> <a name="sandbox" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.sandbox"></a>

```typescript
public readonly sandbox: ZeroTrustGatewaySettingsSettingsSandbox;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandbox">ZeroTrustGatewaySettingsSettingsSandbox</a>

Specify whether to enable the sandbox.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#sandbox ZeroTrustGatewaySettings#sandbox}

---

##### `tlsDecrypt`<sup>Optional</sup> <a name="tlsDecrypt" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings.property.tlsDecrypt"></a>

```typescript
public readonly tlsDecrypt: ZeroTrustGatewaySettingsSettingsTlsDecrypt;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecrypt">ZeroTrustGatewaySettingsSettingsTlsDecrypt</a>

Specify whether to inspect encrypted HTTP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#tls_decrypt ZeroTrustGatewaySettings#tls_decrypt}

---

### ZeroTrustGatewaySettingsSettingsActivityLog <a name="ZeroTrustGatewaySettingsSettingsActivityLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLog.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsSettingsActivityLog: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLog.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify whether to log activity. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLog.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify whether to log activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

### ZeroTrustGatewaySettingsSettingsAntivirus <a name="ZeroTrustGatewaySettingsSettingsAntivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirus.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsSettingsAntivirus: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirus = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirus.property.enabledDownloadPhase">enabledDownloadPhase</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify whether to enable anti-virus scanning on downloads. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirus.property.enabledUploadPhase">enabledUploadPhase</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify whether to enable anti-virus scanning on uploads. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirus.property.failClosed">failClosed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify whether to block requests for unscannable files. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirus.property.notificationSettings">notificationSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings</a></code> | Configure the message the user's device shows during an antivirus scan. |

---

##### `enabledDownloadPhase`<sup>Optional</sup> <a name="enabledDownloadPhase" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirus.property.enabledDownloadPhase"></a>

```typescript
public readonly enabledDownloadPhase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify whether to enable anti-virus scanning on downloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#enabled_download_phase ZeroTrustGatewaySettings#enabled_download_phase}

---

##### `enabledUploadPhase`<sup>Optional</sup> <a name="enabledUploadPhase" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirus.property.enabledUploadPhase"></a>

```typescript
public readonly enabledUploadPhase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify whether to enable anti-virus scanning on uploads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#enabled_upload_phase ZeroTrustGatewaySettings#enabled_upload_phase}

---

##### `failClosed`<sup>Optional</sup> <a name="failClosed" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirus.property.failClosed"></a>

```typescript
public readonly failClosed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify whether to block requests for unscannable files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#fail_closed ZeroTrustGatewaySettings#fail_closed}

---

##### `notificationSettings`<sup>Optional</sup> <a name="notificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirus.property.notificationSettings"></a>

```typescript
public readonly notificationSettings: ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings</a>

Configure the message the user's device shows during an antivirus scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#notification_settings ZeroTrustGatewaySettings#notification_settings}

---

### ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings <a name="ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsSettingsAntivirusNotificationSettings: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify whether to enable notifications. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings.property.includeContext">includeContext</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify whether to include context information as query parameters. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings.property.msg">msg</a></code> | <code>string</code> | Specify the message to show in the notification. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings.property.supportUrl">supportUrl</a></code> | <code>string</code> | Specify a URL that directs users to more information. If unset, the notification opens a block page. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify whether to enable notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

##### `includeContext`<sup>Optional</sup> <a name="includeContext" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings.property.includeContext"></a>

```typescript
public readonly includeContext: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify whether to include context information as query parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#include_context ZeroTrustGatewaySettings#include_context}

---

##### `msg`<sup>Optional</sup> <a name="msg" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings.property.msg"></a>

```typescript
public readonly msg: string;
```

- *Type:* string

Specify the message to show in the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#msg ZeroTrustGatewaySettings#msg}

---

##### `supportUrl`<sup>Optional</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings.property.supportUrl"></a>

```typescript
public readonly supportUrl: string;
```

- *Type:* string

Specify a URL that directs users to more information. If unset, the notification opens a block page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#support_url ZeroTrustGatewaySettings#support_url}

---

### ZeroTrustGatewaySettingsSettingsBlockPage <a name="ZeroTrustGatewaySettingsSettingsBlockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsSettingsBlockPage: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.backgroundColor">backgroundColor</a></code> | <code>string</code> | Specify the block page background color in `#rrggbb` format when the mode is customized_block_page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify whether to enable the custom block page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.footerText">footerText</a></code> | <code>string</code> | Specify the block page footer text when the mode is customized_block_page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.headerText">headerText</a></code> | <code>string</code> | Specify the block page header text when the mode is customized_block_page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.includeContext">includeContext</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify whether to append context to target_uri as query parameters. This applies only when the mode is redirect_uri. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.logoPath">logoPath</a></code> | <code>string</code> | Specify the full URL to the logo file when the mode is customized_block_page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.mailtoAddress">mailtoAddress</a></code> | <code>string</code> | Specify the admin email for users to contact when the mode is customized_block_page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.mailtoSubject">mailtoSubject</a></code> | <code>string</code> | Specify the subject line for emails created from the block page when the mode is customized_block_page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.mode">mode</a></code> | <code>string</code> | Specify whether to redirect users to a Cloudflare-hosted block page or a customer-provided URI. Available values: "", "customized_block_page", "redirect_uri". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.name">name</a></code> | <code>string</code> | Specify the block page title when the mode is customized_block_page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicate that this setting was shared via the Orgs API and read only for the current account. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.sourceAccount">sourceAccount</a></code> | <code>string</code> | Indicate the account tag of the account that shared this setting. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.suppressFooter">suppressFooter</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify whether to suppress detailed information at the bottom of the block page when the mode is customized_block_page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.targetUri">targetUri</a></code> | <code>string</code> | Specify the URI to redirect users to when the mode is redirect_uri. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.version">version</a></code> | <code>number</code> | Indicate the version number of the setting. |

---

##### `backgroundColor`<sup>Optional</sup> <a name="backgroundColor" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.backgroundColor"></a>

```typescript
public readonly backgroundColor: string;
```

- *Type:* string

Specify the block page background color in `#rrggbb` format when the mode is customized_block_page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#background_color ZeroTrustGatewaySettings#background_color}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify whether to enable the custom block page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

##### `footerText`<sup>Optional</sup> <a name="footerText" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.footerText"></a>

```typescript
public readonly footerText: string;
```

- *Type:* string

Specify the block page footer text when the mode is customized_block_page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#footer_text ZeroTrustGatewaySettings#footer_text}

---

##### `headerText`<sup>Optional</sup> <a name="headerText" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.headerText"></a>

```typescript
public readonly headerText: string;
```

- *Type:* string

Specify the block page header text when the mode is customized_block_page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#header_text ZeroTrustGatewaySettings#header_text}

---

##### `includeContext`<sup>Optional</sup> <a name="includeContext" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.includeContext"></a>

```typescript
public readonly includeContext: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify whether to append context to target_uri as query parameters. This applies only when the mode is redirect_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#include_context ZeroTrustGatewaySettings#include_context}

---

##### `logoPath`<sup>Optional</sup> <a name="logoPath" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.logoPath"></a>

```typescript
public readonly logoPath: string;
```

- *Type:* string

Specify the full URL to the logo file when the mode is customized_block_page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#logo_path ZeroTrustGatewaySettings#logo_path}

---

##### `mailtoAddress`<sup>Optional</sup> <a name="mailtoAddress" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.mailtoAddress"></a>

```typescript
public readonly mailtoAddress: string;
```

- *Type:* string

Specify the admin email for users to contact when the mode is customized_block_page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#mailto_address ZeroTrustGatewaySettings#mailto_address}

---

##### `mailtoSubject`<sup>Optional</sup> <a name="mailtoSubject" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.mailtoSubject"></a>

```typescript
public readonly mailtoSubject: string;
```

- *Type:* string

Specify the subject line for emails created from the block page when the mode is customized_block_page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#mailto_subject ZeroTrustGatewaySettings#mailto_subject}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Specify whether to redirect users to a Cloudflare-hosted block page or a customer-provided URI. Available values: "", "customized_block_page", "redirect_uri".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#mode ZeroTrustGatewaySettings#mode}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specify the block page title when the mode is customized_block_page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#name ZeroTrustGatewaySettings#name}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicate that this setting was shared via the Orgs API and read only for the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#read_only ZeroTrustGatewaySettings#read_only}

---

##### `sourceAccount`<sup>Optional</sup> <a name="sourceAccount" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.sourceAccount"></a>

```typescript
public readonly sourceAccount: string;
```

- *Type:* string

Indicate the account tag of the account that shared this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#source_account ZeroTrustGatewaySettings#source_account}

---

##### `suppressFooter`<sup>Optional</sup> <a name="suppressFooter" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.suppressFooter"></a>

```typescript
public readonly suppressFooter: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify whether to suppress detailed information at the bottom of the block page when the mode is customized_block_page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#suppress_footer ZeroTrustGatewaySettings#suppress_footer}

---

##### `targetUri`<sup>Optional</sup> <a name="targetUri" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.targetUri"></a>

```typescript
public readonly targetUri: string;
```

- *Type:* string

Specify the URI to redirect users to when the mode is redirect_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#target_uri ZeroTrustGatewaySettings#target_uri}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

Indicate the version number of the setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#version ZeroTrustGatewaySettings#version}

---

### ZeroTrustGatewaySettingsSettingsBodyScanning <a name="ZeroTrustGatewaySettingsSettingsBodyScanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanning.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsSettingsBodyScanning: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanning = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanning.property.inspectionMode">inspectionMode</a></code> | <code>string</code> | Specify the inspection mode as either `deep` or `shallow`. Available values: "deep", "shallow". |

---

##### `inspectionMode`<sup>Optional</sup> <a name="inspectionMode" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanning.property.inspectionMode"></a>

```typescript
public readonly inspectionMode: string;
```

- *Type:* string

Specify the inspection mode as either `deep` or `shallow`. Available values: "deep", "shallow".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#inspection_mode ZeroTrustGatewaySettings#inspection_mode}

---

### ZeroTrustGatewaySettingsSettingsBrowserIsolation <a name="ZeroTrustGatewaySettingsSettingsBrowserIsolation" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolation.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsSettingsBrowserIsolation: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolation.property.nonIdentityEnabled">nonIdentityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify whether to enable non-identity onramp support for Browser Isolation. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolation.property.urlBrowserIsolationEnabled">urlBrowserIsolationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify whether to enable Clientless Browser Isolation. |

---

##### `nonIdentityEnabled`<sup>Optional</sup> <a name="nonIdentityEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolation.property.nonIdentityEnabled"></a>

```typescript
public readonly nonIdentityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify whether to enable non-identity onramp support for Browser Isolation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#non_identity_enabled ZeroTrustGatewaySettings#non_identity_enabled}

---

##### `urlBrowserIsolationEnabled`<sup>Optional</sup> <a name="urlBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolation.property.urlBrowserIsolationEnabled"></a>

```typescript
public readonly urlBrowserIsolationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify whether to enable Clientless Browser Isolation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#url_browser_isolation_enabled ZeroTrustGatewaySettings#url_browser_isolation_enabled}

---

### ZeroTrustGatewaySettingsSettingsCertificate <a name="ZeroTrustGatewaySettingsSettingsCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificate.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsSettingsCertificate: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificate.property.id">id</a></code> | <code>string</code> | Specify the UUID of the certificate used for interception. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Specify the UUID of the certificate used for interception.

Ensure the certificate is available at the edge(previously called 'active'). A nil UUID directs Cloudflare to use the Root CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ZeroTrustGatewaySettingsSettingsCustomCertificate <a name="ZeroTrustGatewaySettingsSettingsCustomCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificate.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsSettingsCustomCertificate: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificate.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify whether to enable a custom certificate authority for signing Gateway traffic. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificate.property.bindingStatus">bindingStatus</a></code> | <code>string</code> | Indicate the internal certificate status. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificate.property.id">id</a></code> | <code>string</code> | Specify the UUID of the certificate (ID from MTLS certificate store). |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificate.property.updatedAt">updatedAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#updated_at ZeroTrustGatewaySettings#updated_at}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificate.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify whether to enable a custom certificate authority for signing Gateway traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

##### `bindingStatus`<sup>Optional</sup> <a name="bindingStatus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificate.property.bindingStatus"></a>

```typescript
public readonly bindingStatus: string;
```

- *Type:* string

Indicate the internal certificate status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#binding_status ZeroTrustGatewaySettings#binding_status}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Specify the UUID of the certificate (ID from MTLS certificate store).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificate.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#updated_at ZeroTrustGatewaySettings#updated_at}.

---

### ZeroTrustGatewaySettingsSettingsExtendedEmailMatching <a name="ZeroTrustGatewaySettingsSettingsExtendedEmailMatching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatching.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsSettingsExtendedEmailMatching: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatching = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatching.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify whether to match all variants of user emails (with + or . |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatching.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicate that this setting was shared via the Orgs API and read only for the current account. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatching.property.sourceAccount">sourceAccount</a></code> | <code>string</code> | Indicate the account tag of the account that shared this setting. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatching.property.version">version</a></code> | <code>number</code> | Indicate the version number of the setting. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatching.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify whether to match all variants of user emails (with + or .

modifiers) used as criteria in Firewall policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatching.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicate that this setting was shared via the Orgs API and read only for the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#read_only ZeroTrustGatewaySettings#read_only}

---

##### `sourceAccount`<sup>Optional</sup> <a name="sourceAccount" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatching.property.sourceAccount"></a>

```typescript
public readonly sourceAccount: string;
```

- *Type:* string

Indicate the account tag of the account that shared this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#source_account ZeroTrustGatewaySettings#source_account}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatching.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

Indicate the version number of the setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#version ZeroTrustGatewaySettings#version}

---

### ZeroTrustGatewaySettingsSettingsFips <a name="ZeroTrustGatewaySettingsSettingsFips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFips"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFips.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsSettingsFips: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFips = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFips.property.tls">tls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enforce cipher suites and TLS versions compliant with FIPS 140-2. |

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFips.property.tls"></a>

```typescript
public readonly tls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enforce cipher suites and TLS versions compliant with FIPS 140-2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#tls ZeroTrustGatewaySettings#tls}

---

### ZeroTrustGatewaySettingsSettingsHostSelector <a name="ZeroTrustGatewaySettingsSettingsHostSelector" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelector.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsSettingsHostSelector: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelector.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify whether to enable filtering via hosts for egress policies. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelector.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify whether to enable filtering via hosts for egress policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

### ZeroTrustGatewaySettingsSettingsInspection <a name="ZeroTrustGatewaySettingsSettingsInspection" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspection.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsSettingsInspection: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspection.property.mode">mode</a></code> | <code>string</code> | Define the proxy inspection mode. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspection.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Define the proxy inspection mode.

1. static: Gateway applies static inspection to HTTP on TCP(80). With TLS decryption on, Gateway inspects HTTPS traffic on TCP(443) and UDP(443).   2. dynamic: Gateway applies protocol detection to inspect HTTP and HTTPS traffic on any port. TLS decryption must remain on to inspect HTTPS traffic.
Available values: "static", "dynamic".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#mode ZeroTrustGatewaySettings#mode}

---

### ZeroTrustGatewaySettingsSettingsProtocolDetection <a name="ZeroTrustGatewaySettingsSettingsProtocolDetection" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetection.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsSettingsProtocolDetection: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetection.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify whether to detect protocols from the initial bytes of client traffic. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetection.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify whether to detect protocols from the initial bytes of client traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

### ZeroTrustGatewaySettingsSettingsSandbox <a name="ZeroTrustGatewaySettingsSettingsSandbox" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandbox"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandbox.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsSettingsSandbox: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandbox = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandbox.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify whether to enable the sandbox. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandbox.property.fallbackAction">fallbackAction</a></code> | <code>string</code> | Specify the action to take when the system cannot scan the file. Available values: "allow", "block". |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandbox.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify whether to enable the sandbox.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

##### `fallbackAction`<sup>Optional</sup> <a name="fallbackAction" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandbox.property.fallbackAction"></a>

```typescript
public readonly fallbackAction: string;
```

- *Type:* string

Specify the action to take when the system cannot scan the file. Available values: "allow", "block".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#fallback_action ZeroTrustGatewaySettings#fallback_action}

---

### ZeroTrustGatewaySettingsSettingsTlsDecrypt <a name="ZeroTrustGatewaySettingsSettingsTlsDecrypt" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecrypt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecrypt.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

const zeroTrustGatewaySettingsSettingsTlsDecrypt: zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecrypt = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecrypt.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specify whether to inspect encrypted HTTP traffic. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecrypt.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specify whether to inspect encrypted HTTP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustGatewaySettingsSettingsActivityLogOutputReference <a name="ZeroTrustGatewaySettingsSettingsActivityLogOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLog">ZeroTrustGatewaySettingsSettingsActivityLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustGatewaySettingsSettingsActivityLog;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLog">ZeroTrustGatewaySettingsSettingsActivityLog</a>

---


### ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference <a name="ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.resetIncludeContext">resetIncludeContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.resetMsg">resetMsg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.resetSupportUrl">resetSupportUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetIncludeContext` <a name="resetIncludeContext" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.resetIncludeContext"></a>

```typescript
public resetIncludeContext(): void
```

##### `resetMsg` <a name="resetMsg" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.resetMsg"></a>

```typescript
public resetMsg(): void
```

##### `resetSupportUrl` <a name="resetSupportUrl" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.resetSupportUrl"></a>

```typescript
public resetSupportUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.property.includeContextInput">includeContextInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.property.msgInput">msgInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.property.supportUrlInput">supportUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.property.includeContext">includeContext</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.property.msg">msg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.property.supportUrl">supportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeContextInput`<sup>Optional</sup> <a name="includeContextInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.property.includeContextInput"></a>

```typescript
public readonly includeContextInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `msgInput`<sup>Optional</sup> <a name="msgInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.property.msgInput"></a>

```typescript
public readonly msgInput: string;
```

- *Type:* string

---

##### `supportUrlInput`<sup>Optional</sup> <a name="supportUrlInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.property.supportUrlInput"></a>

```typescript
public readonly supportUrlInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeContext`<sup>Required</sup> <a name="includeContext" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.property.includeContext"></a>

```typescript
public readonly includeContext: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `msg`<sup>Required</sup> <a name="msg" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.property.msg"></a>

```typescript
public readonly msg: string;
```

- *Type:* string

---

##### `supportUrl`<sup>Required</sup> <a name="supportUrl" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.property.supportUrl"></a>

```typescript
public readonly supportUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings</a>

---


### ZeroTrustGatewaySettingsSettingsAntivirusOutputReference <a name="ZeroTrustGatewaySettingsSettingsAntivirusOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.putNotificationSettings">putNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.resetEnabledDownloadPhase">resetEnabledDownloadPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.resetEnabledUploadPhase">resetEnabledUploadPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.resetFailClosed">resetFailClosed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.resetNotificationSettings">resetNotificationSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNotificationSettings` <a name="putNotificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.putNotificationSettings"></a>

```typescript
public putNotificationSettings(value: ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.putNotificationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings</a>

---

##### `resetEnabledDownloadPhase` <a name="resetEnabledDownloadPhase" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.resetEnabledDownloadPhase"></a>

```typescript
public resetEnabledDownloadPhase(): void
```

##### `resetEnabledUploadPhase` <a name="resetEnabledUploadPhase" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.resetEnabledUploadPhase"></a>

```typescript
public resetEnabledUploadPhase(): void
```

##### `resetFailClosed` <a name="resetFailClosed" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.resetFailClosed"></a>

```typescript
public resetFailClosed(): void
```

##### `resetNotificationSettings` <a name="resetNotificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.resetNotificationSettings"></a>

```typescript
public resetNotificationSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.property.notificationSettings">notificationSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference">ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.property.enabledDownloadPhaseInput">enabledDownloadPhaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.property.enabledUploadPhaseInput">enabledUploadPhaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.property.failClosedInput">failClosedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.property.notificationSettingsInput">notificationSettingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.property.enabledDownloadPhase">enabledDownloadPhase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.property.enabledUploadPhase">enabledUploadPhase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.property.failClosed">failClosed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirus">ZeroTrustGatewaySettingsSettingsAntivirus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notificationSettings`<sup>Required</sup> <a name="notificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.property.notificationSettings"></a>

```typescript
public readonly notificationSettings: ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference">ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettingsOutputReference</a>

---

##### `enabledDownloadPhaseInput`<sup>Optional</sup> <a name="enabledDownloadPhaseInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.property.enabledDownloadPhaseInput"></a>

```typescript
public readonly enabledDownloadPhaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledUploadPhaseInput`<sup>Optional</sup> <a name="enabledUploadPhaseInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.property.enabledUploadPhaseInput"></a>

```typescript
public readonly enabledUploadPhaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failClosedInput`<sup>Optional</sup> <a name="failClosedInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.property.failClosedInput"></a>

```typescript
public readonly failClosedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notificationSettingsInput`<sup>Optional</sup> <a name="notificationSettingsInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.property.notificationSettingsInput"></a>

```typescript
public readonly notificationSettingsInput: IResolvable | ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsSettingsAntivirusNotificationSettings</a>

---

##### `enabledDownloadPhase`<sup>Required</sup> <a name="enabledDownloadPhase" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.property.enabledDownloadPhase"></a>

```typescript
public readonly enabledDownloadPhase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledUploadPhase`<sup>Required</sup> <a name="enabledUploadPhase" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.property.enabledUploadPhase"></a>

```typescript
public readonly enabledUploadPhase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failClosed`<sup>Required</sup> <a name="failClosed" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.property.failClosed"></a>

```typescript
public readonly failClosed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustGatewaySettingsSettingsAntivirus;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirus">ZeroTrustGatewaySettingsSettingsAntivirus</a>

---


### ZeroTrustGatewaySettingsSettingsBlockPageOutputReference <a name="ZeroTrustGatewaySettingsSettingsBlockPageOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetBackgroundColor">resetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetFooterText">resetFooterText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetHeaderText">resetHeaderText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetIncludeContext">resetIncludeContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetLogoPath">resetLogoPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetMailtoAddress">resetMailtoAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetMailtoSubject">resetMailtoSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetSourceAccount">resetSourceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetSuppressFooter">resetSuppressFooter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetTargetUri">resetTargetUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackgroundColor` <a name="resetBackgroundColor" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetBackgroundColor"></a>

```typescript
public resetBackgroundColor(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFooterText` <a name="resetFooterText" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetFooterText"></a>

```typescript
public resetFooterText(): void
```

##### `resetHeaderText` <a name="resetHeaderText" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetHeaderText"></a>

```typescript
public resetHeaderText(): void
```

##### `resetIncludeContext` <a name="resetIncludeContext" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetIncludeContext"></a>

```typescript
public resetIncludeContext(): void
```

##### `resetLogoPath` <a name="resetLogoPath" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetLogoPath"></a>

```typescript
public resetLogoPath(): void
```

##### `resetMailtoAddress` <a name="resetMailtoAddress" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetMailtoAddress"></a>

```typescript
public resetMailtoAddress(): void
```

##### `resetMailtoSubject` <a name="resetMailtoSubject" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetMailtoSubject"></a>

```typescript
public resetMailtoSubject(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetSourceAccount` <a name="resetSourceAccount" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetSourceAccount"></a>

```typescript
public resetSourceAccount(): void
```

##### `resetSuppressFooter` <a name="resetSuppressFooter" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetSuppressFooter"></a>

```typescript
public resetSuppressFooter(): void
```

##### `resetTargetUri` <a name="resetTargetUri" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetTargetUri"></a>

```typescript
public resetTargetUri(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.backgroundColorInput">backgroundColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.footerTextInput">footerTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.headerTextInput">headerTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.includeContextInput">includeContextInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.logoPathInput">logoPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.mailtoAddressInput">mailtoAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.mailtoSubjectInput">mailtoSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.sourceAccountInput">sourceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.suppressFooterInput">suppressFooterInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.targetUriInput">targetUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.versionInput">versionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.backgroundColor">backgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.footerText">footerText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.headerText">headerText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.includeContext">includeContext</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.logoPath">logoPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.mailtoAddress">mailtoAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.mailtoSubject">mailtoSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.sourceAccount">sourceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.suppressFooter">suppressFooter</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.targetUri">targetUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage">ZeroTrustGatewaySettingsSettingsBlockPage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backgroundColorInput`<sup>Optional</sup> <a name="backgroundColorInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.backgroundColorInput"></a>

```typescript
public readonly backgroundColorInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `footerTextInput`<sup>Optional</sup> <a name="footerTextInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.footerTextInput"></a>

```typescript
public readonly footerTextInput: string;
```

- *Type:* string

---

##### `headerTextInput`<sup>Optional</sup> <a name="headerTextInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.headerTextInput"></a>

```typescript
public readonly headerTextInput: string;
```

- *Type:* string

---

##### `includeContextInput`<sup>Optional</sup> <a name="includeContextInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.includeContextInput"></a>

```typescript
public readonly includeContextInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logoPathInput`<sup>Optional</sup> <a name="logoPathInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.logoPathInput"></a>

```typescript
public readonly logoPathInput: string;
```

- *Type:* string

---

##### `mailtoAddressInput`<sup>Optional</sup> <a name="mailtoAddressInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.mailtoAddressInput"></a>

```typescript
public readonly mailtoAddressInput: string;
```

- *Type:* string

---

##### `mailtoSubjectInput`<sup>Optional</sup> <a name="mailtoSubjectInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.mailtoSubjectInput"></a>

```typescript
public readonly mailtoSubjectInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceAccountInput`<sup>Optional</sup> <a name="sourceAccountInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.sourceAccountInput"></a>

```typescript
public readonly sourceAccountInput: string;
```

- *Type:* string

---

##### `suppressFooterInput`<sup>Optional</sup> <a name="suppressFooterInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.suppressFooterInput"></a>

```typescript
public readonly suppressFooterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetUriInput`<sup>Optional</sup> <a name="targetUriInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.targetUriInput"></a>

```typescript
public readonly targetUriInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: number;
```

- *Type:* number

---

##### `backgroundColor`<sup>Required</sup> <a name="backgroundColor" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.backgroundColor"></a>

```typescript
public readonly backgroundColor: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `footerText`<sup>Required</sup> <a name="footerText" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.footerText"></a>

```typescript
public readonly footerText: string;
```

- *Type:* string

---

##### `headerText`<sup>Required</sup> <a name="headerText" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.headerText"></a>

```typescript
public readonly headerText: string;
```

- *Type:* string

---

##### `includeContext`<sup>Required</sup> <a name="includeContext" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.includeContext"></a>

```typescript
public readonly includeContext: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logoPath`<sup>Required</sup> <a name="logoPath" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.logoPath"></a>

```typescript
public readonly logoPath: string;
```

- *Type:* string

---

##### `mailtoAddress`<sup>Required</sup> <a name="mailtoAddress" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.mailtoAddress"></a>

```typescript
public readonly mailtoAddress: string;
```

- *Type:* string

---

##### `mailtoSubject`<sup>Required</sup> <a name="mailtoSubject" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.mailtoSubject"></a>

```typescript
public readonly mailtoSubject: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceAccount`<sup>Required</sup> <a name="sourceAccount" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.sourceAccount"></a>

```typescript
public readonly sourceAccount: string;
```

- *Type:* string

---

##### `suppressFooter`<sup>Required</sup> <a name="suppressFooter" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.suppressFooter"></a>

```typescript
public readonly suppressFooter: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetUri`<sup>Required</sup> <a name="targetUri" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.targetUri"></a>

```typescript
public readonly targetUri: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustGatewaySettingsSettingsBlockPage;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage">ZeroTrustGatewaySettingsSettingsBlockPage</a>

---


### ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference <a name="ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.resetInspectionMode">resetInspectionMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInspectionMode` <a name="resetInspectionMode" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.resetInspectionMode"></a>

```typescript
public resetInspectionMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.property.inspectionModeInput">inspectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.property.inspectionMode">inspectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanning">ZeroTrustGatewaySettingsSettingsBodyScanning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inspectionModeInput`<sup>Optional</sup> <a name="inspectionModeInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.property.inspectionModeInput"></a>

```typescript
public readonly inspectionModeInput: string;
```

- *Type:* string

---

##### `inspectionMode`<sup>Required</sup> <a name="inspectionMode" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.property.inspectionMode"></a>

```typescript
public readonly inspectionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustGatewaySettingsSettingsBodyScanning;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanning">ZeroTrustGatewaySettingsSettingsBodyScanning</a>

---


### ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference <a name="ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.resetNonIdentityEnabled">resetNonIdentityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.resetUrlBrowserIsolationEnabled">resetUrlBrowserIsolationEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNonIdentityEnabled` <a name="resetNonIdentityEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.resetNonIdentityEnabled"></a>

```typescript
public resetNonIdentityEnabled(): void
```

##### `resetUrlBrowserIsolationEnabled` <a name="resetUrlBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.resetUrlBrowserIsolationEnabled"></a>

```typescript
public resetUrlBrowserIsolationEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.property.nonIdentityEnabledInput">nonIdentityEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.property.urlBrowserIsolationEnabledInput">urlBrowserIsolationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.property.nonIdentityEnabled">nonIdentityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.property.urlBrowserIsolationEnabled">urlBrowserIsolationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolation">ZeroTrustGatewaySettingsSettingsBrowserIsolation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nonIdentityEnabledInput`<sup>Optional</sup> <a name="nonIdentityEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.property.nonIdentityEnabledInput"></a>

```typescript
public readonly nonIdentityEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `urlBrowserIsolationEnabledInput`<sup>Optional</sup> <a name="urlBrowserIsolationEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.property.urlBrowserIsolationEnabledInput"></a>

```typescript
public readonly urlBrowserIsolationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nonIdentityEnabled`<sup>Required</sup> <a name="nonIdentityEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.property.nonIdentityEnabled"></a>

```typescript
public readonly nonIdentityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `urlBrowserIsolationEnabled`<sup>Required</sup> <a name="urlBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.property.urlBrowserIsolationEnabled"></a>

```typescript
public readonly urlBrowserIsolationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustGatewaySettingsSettingsBrowserIsolation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolation">ZeroTrustGatewaySettingsSettingsBrowserIsolation</a>

---


### ZeroTrustGatewaySettingsSettingsCertificateOutputReference <a name="ZeroTrustGatewaySettingsSettingsCertificateOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificate">ZeroTrustGatewaySettingsSettingsCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustGatewaySettingsSettingsCertificate;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificate">ZeroTrustGatewaySettingsSettingsCertificate</a>

---


### ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference <a name="ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.resetBindingStatus">resetBindingStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.resetUpdatedAt">resetUpdatedAt</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBindingStatus` <a name="resetBindingStatus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.resetBindingStatus"></a>

```typescript
public resetBindingStatus(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetUpdatedAt` <a name="resetUpdatedAt" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.resetUpdatedAt"></a>

```typescript
public resetUpdatedAt(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.property.bindingStatusInput">bindingStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.property.updatedAtInput">updatedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.property.bindingStatus">bindingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificate">ZeroTrustGatewaySettingsSettingsCustomCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bindingStatusInput`<sup>Optional</sup> <a name="bindingStatusInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.property.bindingStatusInput"></a>

```typescript
public readonly bindingStatusInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `updatedAtInput`<sup>Optional</sup> <a name="updatedAtInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.property.updatedAtInput"></a>

```typescript
public readonly updatedAtInput: string;
```

- *Type:* string

---

##### `bindingStatus`<sup>Required</sup> <a name="bindingStatus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.property.bindingStatus"></a>

```typescript
public readonly bindingStatus: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustGatewaySettingsSettingsCustomCertificate;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificate">ZeroTrustGatewaySettingsSettingsCustomCertificate</a>

---


### ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference <a name="ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.resetSourceAccount">resetSourceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetSourceAccount` <a name="resetSourceAccount" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.resetSourceAccount"></a>

```typescript
public resetSourceAccount(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.property.sourceAccountInput">sourceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.property.versionInput">versionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.property.sourceAccount">sourceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatching">ZeroTrustGatewaySettingsSettingsExtendedEmailMatching</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceAccountInput`<sup>Optional</sup> <a name="sourceAccountInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.property.sourceAccountInput"></a>

```typescript
public readonly sourceAccountInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceAccount`<sup>Required</sup> <a name="sourceAccount" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.property.sourceAccount"></a>

```typescript
public readonly sourceAccount: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustGatewaySettingsSettingsExtendedEmailMatching;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatching">ZeroTrustGatewaySettingsSettingsExtendedEmailMatching</a>

---


### ZeroTrustGatewaySettingsSettingsFipsOutputReference <a name="ZeroTrustGatewaySettingsSettingsFipsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.resetTls">resetTls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTls` <a name="resetTls" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.resetTls"></a>

```typescript
public resetTls(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.property.tlsInput">tlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.property.tls">tls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFips">ZeroTrustGatewaySettingsSettingsFips</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.property.tlsInput"></a>

```typescript
public readonly tlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.property.tls"></a>

```typescript
public readonly tls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustGatewaySettingsSettingsFips;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFips">ZeroTrustGatewaySettingsSettingsFips</a>

---


### ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference <a name="ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelector">ZeroTrustGatewaySettingsSettingsHostSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustGatewaySettingsSettingsHostSelector;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelector">ZeroTrustGatewaySettingsSettingsHostSelector</a>

---


### ZeroTrustGatewaySettingsSettingsInspectionOutputReference <a name="ZeroTrustGatewaySettingsSettingsInspectionOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspection">ZeroTrustGatewaySettingsSettingsInspection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustGatewaySettingsSettingsInspection;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspection">ZeroTrustGatewaySettingsSettingsInspection</a>

---


### ZeroTrustGatewaySettingsSettingsOutputReference <a name="ZeroTrustGatewaySettingsSettingsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putActivityLog">putActivityLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putAntivirus">putAntivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putBlockPage">putBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putBodyScanning">putBodyScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putBrowserIsolation">putBrowserIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putCertificate">putCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putCustomCertificate">putCustomCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putExtendedEmailMatching">putExtendedEmailMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putFips">putFips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putHostSelector">putHostSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putInspection">putInspection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putProtocolDetection">putProtocolDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putSandbox">putSandbox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putTlsDecrypt">putTlsDecrypt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetActivityLog">resetActivityLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetAntivirus">resetAntivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetBlockPage">resetBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetBodyScanning">resetBodyScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetBrowserIsolation">resetBrowserIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetCustomCertificate">resetCustomCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetExtendedEmailMatching">resetExtendedEmailMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetFips">resetFips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetHostSelector">resetHostSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetInspection">resetInspection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetProtocolDetection">resetProtocolDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetSandbox">resetSandbox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetTlsDecrypt">resetTlsDecrypt</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActivityLog` <a name="putActivityLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putActivityLog"></a>

```typescript
public putActivityLog(value: ZeroTrustGatewaySettingsSettingsActivityLog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putActivityLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLog">ZeroTrustGatewaySettingsSettingsActivityLog</a>

---

##### `putAntivirus` <a name="putAntivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putAntivirus"></a>

```typescript
public putAntivirus(value: ZeroTrustGatewaySettingsSettingsAntivirus): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putAntivirus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirus">ZeroTrustGatewaySettingsSettingsAntivirus</a>

---

##### `putBlockPage` <a name="putBlockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putBlockPage"></a>

```typescript
public putBlockPage(value: ZeroTrustGatewaySettingsSettingsBlockPage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putBlockPage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage">ZeroTrustGatewaySettingsSettingsBlockPage</a>

---

##### `putBodyScanning` <a name="putBodyScanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putBodyScanning"></a>

```typescript
public putBodyScanning(value: ZeroTrustGatewaySettingsSettingsBodyScanning): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putBodyScanning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanning">ZeroTrustGatewaySettingsSettingsBodyScanning</a>

---

##### `putBrowserIsolation` <a name="putBrowserIsolation" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putBrowserIsolation"></a>

```typescript
public putBrowserIsolation(value: ZeroTrustGatewaySettingsSettingsBrowserIsolation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putBrowserIsolation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolation">ZeroTrustGatewaySettingsSettingsBrowserIsolation</a>

---

##### `putCertificate` <a name="putCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putCertificate"></a>

```typescript
public putCertificate(value: ZeroTrustGatewaySettingsSettingsCertificate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificate">ZeroTrustGatewaySettingsSettingsCertificate</a>

---

##### `putCustomCertificate` <a name="putCustomCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putCustomCertificate"></a>

```typescript
public putCustomCertificate(value: ZeroTrustGatewaySettingsSettingsCustomCertificate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putCustomCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificate">ZeroTrustGatewaySettingsSettingsCustomCertificate</a>

---

##### `putExtendedEmailMatching` <a name="putExtendedEmailMatching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putExtendedEmailMatching"></a>

```typescript
public putExtendedEmailMatching(value: ZeroTrustGatewaySettingsSettingsExtendedEmailMatching): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putExtendedEmailMatching.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatching">ZeroTrustGatewaySettingsSettingsExtendedEmailMatching</a>

---

##### `putFips` <a name="putFips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putFips"></a>

```typescript
public putFips(value: ZeroTrustGatewaySettingsSettingsFips): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putFips.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFips">ZeroTrustGatewaySettingsSettingsFips</a>

---

##### `putHostSelector` <a name="putHostSelector" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putHostSelector"></a>

```typescript
public putHostSelector(value: ZeroTrustGatewaySettingsSettingsHostSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putHostSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelector">ZeroTrustGatewaySettingsSettingsHostSelector</a>

---

##### `putInspection` <a name="putInspection" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putInspection"></a>

```typescript
public putInspection(value: ZeroTrustGatewaySettingsSettingsInspection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putInspection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspection">ZeroTrustGatewaySettingsSettingsInspection</a>

---

##### `putProtocolDetection` <a name="putProtocolDetection" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putProtocolDetection"></a>

```typescript
public putProtocolDetection(value: ZeroTrustGatewaySettingsSettingsProtocolDetection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putProtocolDetection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetection">ZeroTrustGatewaySettingsSettingsProtocolDetection</a>

---

##### `putSandbox` <a name="putSandbox" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putSandbox"></a>

```typescript
public putSandbox(value: ZeroTrustGatewaySettingsSettingsSandbox): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putSandbox.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandbox">ZeroTrustGatewaySettingsSettingsSandbox</a>

---

##### `putTlsDecrypt` <a name="putTlsDecrypt" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putTlsDecrypt"></a>

```typescript
public putTlsDecrypt(value: ZeroTrustGatewaySettingsSettingsTlsDecrypt): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.putTlsDecrypt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecrypt">ZeroTrustGatewaySettingsSettingsTlsDecrypt</a>

---

##### `resetActivityLog` <a name="resetActivityLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetActivityLog"></a>

```typescript
public resetActivityLog(): void
```

##### `resetAntivirus` <a name="resetAntivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetAntivirus"></a>

```typescript
public resetAntivirus(): void
```

##### `resetBlockPage` <a name="resetBlockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetBlockPage"></a>

```typescript
public resetBlockPage(): void
```

##### `resetBodyScanning` <a name="resetBodyScanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetBodyScanning"></a>

```typescript
public resetBodyScanning(): void
```

##### `resetBrowserIsolation` <a name="resetBrowserIsolation" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetBrowserIsolation"></a>

```typescript
public resetBrowserIsolation(): void
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetCustomCertificate` <a name="resetCustomCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetCustomCertificate"></a>

```typescript
public resetCustomCertificate(): void
```

##### `resetExtendedEmailMatching` <a name="resetExtendedEmailMatching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetExtendedEmailMatching"></a>

```typescript
public resetExtendedEmailMatching(): void
```

##### `resetFips` <a name="resetFips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetFips"></a>

```typescript
public resetFips(): void
```

##### `resetHostSelector` <a name="resetHostSelector" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetHostSelector"></a>

```typescript
public resetHostSelector(): void
```

##### `resetInspection` <a name="resetInspection" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetInspection"></a>

```typescript
public resetInspection(): void
```

##### `resetProtocolDetection` <a name="resetProtocolDetection" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetProtocolDetection"></a>

```typescript
public resetProtocolDetection(): void
```

##### `resetSandbox` <a name="resetSandbox" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetSandbox"></a>

```typescript
public resetSandbox(): void
```

##### `resetTlsDecrypt` <a name="resetTlsDecrypt" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.resetTlsDecrypt"></a>

```typescript
public resetTlsDecrypt(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.activityLog">activityLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference">ZeroTrustGatewaySettingsSettingsActivityLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.antivirus">antivirus</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference">ZeroTrustGatewaySettingsSettingsAntivirusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.blockPage">blockPage</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference">ZeroTrustGatewaySettingsSettingsBlockPageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.bodyScanning">bodyScanning</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference">ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.browserIsolation">browserIsolation</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference">ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference">ZeroTrustGatewaySettingsSettingsCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.customCertificate">customCertificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference">ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.extendedEmailMatching">extendedEmailMatching</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference">ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.fips">fips</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference">ZeroTrustGatewaySettingsSettingsFipsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.hostSelector">hostSelector</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference">ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.inspection">inspection</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference">ZeroTrustGatewaySettingsSettingsInspectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.protocolDetection">protocolDetection</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference">ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.sandbox">sandbox</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference">ZeroTrustGatewaySettingsSettingsSandboxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.tlsDecrypt">tlsDecrypt</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference">ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.activityLogInput">activityLogInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLog">ZeroTrustGatewaySettingsSettingsActivityLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.antivirusInput">antivirusInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirus">ZeroTrustGatewaySettingsSettingsAntivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.blockPageInput">blockPageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage">ZeroTrustGatewaySettingsSettingsBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.bodyScanningInput">bodyScanningInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanning">ZeroTrustGatewaySettingsSettingsBodyScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.browserIsolationInput">browserIsolationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolation">ZeroTrustGatewaySettingsSettingsBrowserIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.certificateInput">certificateInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificate">ZeroTrustGatewaySettingsSettingsCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.customCertificateInput">customCertificateInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificate">ZeroTrustGatewaySettingsSettingsCustomCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.extendedEmailMatchingInput">extendedEmailMatchingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatching">ZeroTrustGatewaySettingsSettingsExtendedEmailMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.fipsInput">fipsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFips">ZeroTrustGatewaySettingsSettingsFips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.hostSelectorInput">hostSelectorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelector">ZeroTrustGatewaySettingsSettingsHostSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.inspectionInput">inspectionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspection">ZeroTrustGatewaySettingsSettingsInspection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.protocolDetectionInput">protocolDetectionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetection">ZeroTrustGatewaySettingsSettingsProtocolDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.sandboxInput">sandboxInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandbox">ZeroTrustGatewaySettingsSettingsSandbox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.tlsDecryptInput">tlsDecryptInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecrypt">ZeroTrustGatewaySettingsSettingsTlsDecrypt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings">ZeroTrustGatewaySettingsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activityLog`<sup>Required</sup> <a name="activityLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.activityLog"></a>

```typescript
public readonly activityLog: ZeroTrustGatewaySettingsSettingsActivityLogOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLogOutputReference">ZeroTrustGatewaySettingsSettingsActivityLogOutputReference</a>

---

##### `antivirus`<sup>Required</sup> <a name="antivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.antivirus"></a>

```typescript
public readonly antivirus: ZeroTrustGatewaySettingsSettingsAntivirusOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirusOutputReference">ZeroTrustGatewaySettingsSettingsAntivirusOutputReference</a>

---

##### `blockPage`<sup>Required</sup> <a name="blockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.blockPage"></a>

```typescript
public readonly blockPage: ZeroTrustGatewaySettingsSettingsBlockPageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPageOutputReference">ZeroTrustGatewaySettingsSettingsBlockPageOutputReference</a>

---

##### `bodyScanning`<sup>Required</sup> <a name="bodyScanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.bodyScanning"></a>

```typescript
public readonly bodyScanning: ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference">ZeroTrustGatewaySettingsSettingsBodyScanningOutputReference</a>

---

##### `browserIsolation`<sup>Required</sup> <a name="browserIsolation" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.browserIsolation"></a>

```typescript
public readonly browserIsolation: ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference">ZeroTrustGatewaySettingsSettingsBrowserIsolationOutputReference</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.certificate"></a>

```typescript
public readonly certificate: ZeroTrustGatewaySettingsSettingsCertificateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificateOutputReference">ZeroTrustGatewaySettingsSettingsCertificateOutputReference</a>

---

##### `customCertificate`<sup>Required</sup> <a name="customCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.customCertificate"></a>

```typescript
public readonly customCertificate: ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference">ZeroTrustGatewaySettingsSettingsCustomCertificateOutputReference</a>

---

##### `extendedEmailMatching`<sup>Required</sup> <a name="extendedEmailMatching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.extendedEmailMatching"></a>

```typescript
public readonly extendedEmailMatching: ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference">ZeroTrustGatewaySettingsSettingsExtendedEmailMatchingOutputReference</a>

---

##### `fips`<sup>Required</sup> <a name="fips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.fips"></a>

```typescript
public readonly fips: ZeroTrustGatewaySettingsSettingsFipsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFipsOutputReference">ZeroTrustGatewaySettingsSettingsFipsOutputReference</a>

---

##### `hostSelector`<sup>Required</sup> <a name="hostSelector" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.hostSelector"></a>

```typescript
public readonly hostSelector: ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference">ZeroTrustGatewaySettingsSettingsHostSelectorOutputReference</a>

---

##### `inspection`<sup>Required</sup> <a name="inspection" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.inspection"></a>

```typescript
public readonly inspection: ZeroTrustGatewaySettingsSettingsInspectionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspectionOutputReference">ZeroTrustGatewaySettingsSettingsInspectionOutputReference</a>

---

##### `protocolDetection`<sup>Required</sup> <a name="protocolDetection" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.protocolDetection"></a>

```typescript
public readonly protocolDetection: ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference">ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference</a>

---

##### `sandbox`<sup>Required</sup> <a name="sandbox" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.sandbox"></a>

```typescript
public readonly sandbox: ZeroTrustGatewaySettingsSettingsSandboxOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference">ZeroTrustGatewaySettingsSettingsSandboxOutputReference</a>

---

##### `tlsDecrypt`<sup>Required</sup> <a name="tlsDecrypt" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.tlsDecrypt"></a>

```typescript
public readonly tlsDecrypt: ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference">ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference</a>

---

##### `activityLogInput`<sup>Optional</sup> <a name="activityLogInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.activityLogInput"></a>

```typescript
public readonly activityLogInput: IResolvable | ZeroTrustGatewaySettingsSettingsActivityLog;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsActivityLog">ZeroTrustGatewaySettingsSettingsActivityLog</a>

---

##### `antivirusInput`<sup>Optional</sup> <a name="antivirusInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.antivirusInput"></a>

```typescript
public readonly antivirusInput: IResolvable | ZeroTrustGatewaySettingsSettingsAntivirus;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsAntivirus">ZeroTrustGatewaySettingsSettingsAntivirus</a>

---

##### `blockPageInput`<sup>Optional</sup> <a name="blockPageInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.blockPageInput"></a>

```typescript
public readonly blockPageInput: IResolvable | ZeroTrustGatewaySettingsSettingsBlockPage;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBlockPage">ZeroTrustGatewaySettingsSettingsBlockPage</a>

---

##### `bodyScanningInput`<sup>Optional</sup> <a name="bodyScanningInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.bodyScanningInput"></a>

```typescript
public readonly bodyScanningInput: IResolvable | ZeroTrustGatewaySettingsSettingsBodyScanning;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBodyScanning">ZeroTrustGatewaySettingsSettingsBodyScanning</a>

---

##### `browserIsolationInput`<sup>Optional</sup> <a name="browserIsolationInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.browserIsolationInput"></a>

```typescript
public readonly browserIsolationInput: IResolvable | ZeroTrustGatewaySettingsSettingsBrowserIsolation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsBrowserIsolation">ZeroTrustGatewaySettingsSettingsBrowserIsolation</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.certificateInput"></a>

```typescript
public readonly certificateInput: IResolvable | ZeroTrustGatewaySettingsSettingsCertificate;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCertificate">ZeroTrustGatewaySettingsSettingsCertificate</a>

---

##### `customCertificateInput`<sup>Optional</sup> <a name="customCertificateInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.customCertificateInput"></a>

```typescript
public readonly customCertificateInput: IResolvable | ZeroTrustGatewaySettingsSettingsCustomCertificate;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsCustomCertificate">ZeroTrustGatewaySettingsSettingsCustomCertificate</a>

---

##### `extendedEmailMatchingInput`<sup>Optional</sup> <a name="extendedEmailMatchingInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.extendedEmailMatchingInput"></a>

```typescript
public readonly extendedEmailMatchingInput: IResolvable | ZeroTrustGatewaySettingsSettingsExtendedEmailMatching;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsExtendedEmailMatching">ZeroTrustGatewaySettingsSettingsExtendedEmailMatching</a>

---

##### `fipsInput`<sup>Optional</sup> <a name="fipsInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.fipsInput"></a>

```typescript
public readonly fipsInput: IResolvable | ZeroTrustGatewaySettingsSettingsFips;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsFips">ZeroTrustGatewaySettingsSettingsFips</a>

---

##### `hostSelectorInput`<sup>Optional</sup> <a name="hostSelectorInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.hostSelectorInput"></a>

```typescript
public readonly hostSelectorInput: IResolvable | ZeroTrustGatewaySettingsSettingsHostSelector;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsHostSelector">ZeroTrustGatewaySettingsSettingsHostSelector</a>

---

##### `inspectionInput`<sup>Optional</sup> <a name="inspectionInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.inspectionInput"></a>

```typescript
public readonly inspectionInput: IResolvable | ZeroTrustGatewaySettingsSettingsInspection;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsInspection">ZeroTrustGatewaySettingsSettingsInspection</a>

---

##### `protocolDetectionInput`<sup>Optional</sup> <a name="protocolDetectionInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.protocolDetectionInput"></a>

```typescript
public readonly protocolDetectionInput: IResolvable | ZeroTrustGatewaySettingsSettingsProtocolDetection;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetection">ZeroTrustGatewaySettingsSettingsProtocolDetection</a>

---

##### `sandboxInput`<sup>Optional</sup> <a name="sandboxInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.sandboxInput"></a>

```typescript
public readonly sandboxInput: IResolvable | ZeroTrustGatewaySettingsSettingsSandbox;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandbox">ZeroTrustGatewaySettingsSettingsSandbox</a>

---

##### `tlsDecryptInput`<sup>Optional</sup> <a name="tlsDecryptInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.tlsDecryptInput"></a>

```typescript
public readonly tlsDecryptInput: IResolvable | ZeroTrustGatewaySettingsSettingsTlsDecrypt;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecrypt">ZeroTrustGatewaySettingsSettingsTlsDecrypt</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustGatewaySettingsSettings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettings">ZeroTrustGatewaySettingsSettings</a>

---


### ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference <a name="ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetection">ZeroTrustGatewaySettingsSettingsProtocolDetection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustGatewaySettingsSettingsProtocolDetection;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsProtocolDetection">ZeroTrustGatewaySettingsSettingsProtocolDetection</a>

---


### ZeroTrustGatewaySettingsSettingsSandboxOutputReference <a name="ZeroTrustGatewaySettingsSettingsSandboxOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.resetFallbackAction">resetFallbackAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFallbackAction` <a name="resetFallbackAction" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.resetFallbackAction"></a>

```typescript
public resetFallbackAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.property.fallbackActionInput">fallbackActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.property.fallbackAction">fallbackAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandbox">ZeroTrustGatewaySettingsSettingsSandbox</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fallbackActionInput`<sup>Optional</sup> <a name="fallbackActionInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.property.fallbackActionInput"></a>

```typescript
public readonly fallbackActionInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fallbackAction`<sup>Required</sup> <a name="fallbackAction" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.property.fallbackAction"></a>

```typescript
public readonly fallbackAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandboxOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustGatewaySettingsSettingsSandbox;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsSandbox">ZeroTrustGatewaySettingsSettingsSandbox</a>

---


### ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference <a name="ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewaySettings } from '@cdktf/provider-cloudflare'

new zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecrypt">ZeroTrustGatewaySettingsSettingsTlsDecrypt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecryptOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustGatewaySettingsSettingsTlsDecrypt;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSettingsTlsDecrypt">ZeroTrustGatewaySettingsSettingsTlsDecrypt</a>

---



