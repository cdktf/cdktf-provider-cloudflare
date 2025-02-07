# `zeroTrustDevicePostureIntegration` Submodule <a name="`zeroTrustDevicePostureIntegration` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDevicePostureIntegration <a name="ZeroTrustDevicePostureIntegration" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_posture_integration cloudflare_zero_trust_device_posture_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.Initializer"></a>

```typescript
import { zeroTrustDevicePostureIntegration } from '@cdktf/provider-cloudflare'

new zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration(scope: Construct, id: string, config: ZeroTrustDevicePostureIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig">ZeroTrustDevicePostureIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig">ZeroTrustDevicePostureIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.putConfig">putConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.putConfig"></a>

```typescript
public putConfig(value: ZeroTrustDevicePostureIntegrationConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA">ZeroTrustDevicePostureIntegrationConfigA</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDevicePostureIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isConstruct"></a>

```typescript
import { zeroTrustDevicePostureIntegration } from '@cdktf/provider-cloudflare'

zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isTerraformElement"></a>

```typescript
import { zeroTrustDevicePostureIntegration } from '@cdktf/provider-cloudflare'

zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isTerraformResource"></a>

```typescript
import { zeroTrustDevicePostureIntegration } from '@cdktf/provider-cloudflare'

zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.generateConfigForImport"></a>

```typescript
import { zeroTrustDevicePostureIntegration } from '@cdktf/provider-cloudflare'

zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZeroTrustDevicePostureIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustDevicePostureIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustDevicePostureIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_posture_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDevicePostureIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference">ZeroTrustDevicePostureIntegrationConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.configInput">configInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA">ZeroTrustDevicePostureIntegrationConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.intervalInput">intervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.interval">interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.config"></a>

```typescript
public readonly config: ZeroTrustDevicePostureIntegrationConfigAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference">ZeroTrustDevicePostureIntegrationConfigAOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.configInput"></a>

```typescript
public readonly configInput: IResolvable | ZeroTrustDevicePostureIntegrationConfigA;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA">ZeroTrustDevicePostureIntegrationConfigA</a>

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.intervalInput"></a>

```typescript
public readonly intervalInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDevicePostureIntegrationConfig <a name="ZeroTrustDevicePostureIntegrationConfig" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.Initializer"></a>

```typescript
import { zeroTrustDevicePostureIntegration } from '@cdktf/provider-cloudflare'

const zeroTrustDevicePostureIntegrationConfig: zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_posture_integration#account_id ZeroTrustDevicePostureIntegration#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA">ZeroTrustDevicePostureIntegrationConfigA</a></code> | The configuration object containing third-party integration information. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.interval">interval</a></code> | <code>string</code> | The interval between each posture check with the third-party API. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.name">name</a></code> | <code>string</code> | The name of the device posture integration. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.type">type</a></code> | <code>string</code> | The type of device posture integration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_posture_integration#account_id ZeroTrustDevicePostureIntegration#account_id}.

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.config"></a>

```typescript
public readonly config: ZeroTrustDevicePostureIntegrationConfigA;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA">ZeroTrustDevicePostureIntegrationConfigA</a>

The configuration object containing third-party integration information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_posture_integration#config ZeroTrustDevicePostureIntegration#config}

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

The interval between each posture check with the third-party API.

Use `m` for minutes (e.g. `5m`) and `h` for hours (e.g. `12h`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_posture_integration#interval ZeroTrustDevicePostureIntegration#interval}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_posture_integration#name ZeroTrustDevicePostureIntegration#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_posture_integration#type ZeroTrustDevicePostureIntegration#type}

---

### ZeroTrustDevicePostureIntegrationConfigA <a name="ZeroTrustDevicePostureIntegrationConfigA" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.Initializer"></a>

```typescript
import { zeroTrustDevicePostureIntegration } from '@cdktf/provider-cloudflare'

const zeroTrustDevicePostureIntegrationConfigA: zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.accessClientId">accessClientId</a></code> | <code>string</code> | If present, this id will be passed in the `CF-Access-Client-ID` header when hitting the `api_url`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.accessClientSecret">accessClientSecret</a></code> | <code>string</code> | If present, this secret will be passed in the `CF-Access-Client-Secret` header when hitting the `api_url`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.apiUrl">apiUrl</a></code> | <code>string</code> | The Workspace One API URL provided in the Workspace One Admin Dashboard. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.authUrl">authUrl</a></code> | <code>string</code> | The Workspace One Authorization URL depending on your region. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.clientId">clientId</a></code> | <code>string</code> | The Workspace One client ID provided in the Workspace One Admin Dashboard. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.clientKey">clientKey</a></code> | <code>string</code> | The Uptycs client secret. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.clientSecret">clientSecret</a></code> | <code>string</code> | The Workspace One client secret provided in the Workspace One Admin Dashboard. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.customerId">customerId</a></code> | <code>string</code> | The Crowdstrike customer ID. |

---

##### `accessClientId`<sup>Optional</sup> <a name="accessClientId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.accessClientId"></a>

```typescript
public readonly accessClientId: string;
```

- *Type:* string

If present, this id will be passed in the `CF-Access-Client-ID` header when hitting the `api_url`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_posture_integration#access_client_id ZeroTrustDevicePostureIntegration#access_client_id}

---

##### `accessClientSecret`<sup>Optional</sup> <a name="accessClientSecret" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.accessClientSecret"></a>

```typescript
public readonly accessClientSecret: string;
```

- *Type:* string

If present, this secret will be passed in the `CF-Access-Client-Secret` header when hitting the `api_url`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_posture_integration#access_client_secret ZeroTrustDevicePostureIntegration#access_client_secret}

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.apiUrl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* string

The Workspace One API URL provided in the Workspace One Admin Dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_posture_integration#api_url ZeroTrustDevicePostureIntegration#api_url}

---

##### `authUrl`<sup>Optional</sup> <a name="authUrl" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.authUrl"></a>

```typescript
public readonly authUrl: string;
```

- *Type:* string

The Workspace One Authorization URL depending on your region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_posture_integration#auth_url ZeroTrustDevicePostureIntegration#auth_url}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The Workspace One client ID provided in the Workspace One Admin Dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_posture_integration#client_id ZeroTrustDevicePostureIntegration#client_id}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

The Uptycs client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_posture_integration#client_key ZeroTrustDevicePostureIntegration#client_key}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The Workspace One client secret provided in the Workspace One Admin Dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_posture_integration#client_secret ZeroTrustDevicePostureIntegration#client_secret}

---

##### `customerId`<sup>Optional</sup> <a name="customerId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.customerId"></a>

```typescript
public readonly customerId: string;
```

- *Type:* string

The Crowdstrike customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_posture_integration#customer_id ZeroTrustDevicePostureIntegration#customer_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDevicePostureIntegrationConfigAOutputReference <a name="ZeroTrustDevicePostureIntegrationConfigAOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.Initializer"></a>

```typescript
import { zeroTrustDevicePostureIntegration } from '@cdktf/provider-cloudflare'

new zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetAccessClientId">resetAccessClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetAccessClientSecret">resetAccessClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetApiUrl">resetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetAuthUrl">resetAuthUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetClientKey">resetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetCustomerId">resetCustomerId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessClientId` <a name="resetAccessClientId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetAccessClientId"></a>

```typescript
public resetAccessClientId(): void
```

##### `resetAccessClientSecret` <a name="resetAccessClientSecret" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetAccessClientSecret"></a>

```typescript
public resetAccessClientSecret(): void
```

##### `resetApiUrl` <a name="resetApiUrl" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetApiUrl"></a>

```typescript
public resetApiUrl(): void
```

##### `resetAuthUrl` <a name="resetAuthUrl" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetAuthUrl"></a>

```typescript
public resetAuthUrl(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetClientKey"></a>

```typescript
public resetClientKey(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetCustomerId` <a name="resetCustomerId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetCustomerId"></a>

```typescript
public resetCustomerId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.accessClientIdInput">accessClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.accessClientSecretInput">accessClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.apiUrlInput">apiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.authUrlInput">authUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.customerIdInput">customerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.accessClientId">accessClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.accessClientSecret">accessClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.apiUrl">apiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.authUrl">authUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.customerId">customerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA">ZeroTrustDevicePostureIntegrationConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessClientIdInput`<sup>Optional</sup> <a name="accessClientIdInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.accessClientIdInput"></a>

```typescript
public readonly accessClientIdInput: string;
```

- *Type:* string

---

##### `accessClientSecretInput`<sup>Optional</sup> <a name="accessClientSecretInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.accessClientSecretInput"></a>

```typescript
public readonly accessClientSecretInput: string;
```

- *Type:* string

---

##### `apiUrlInput`<sup>Optional</sup> <a name="apiUrlInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.apiUrlInput"></a>

```typescript
public readonly apiUrlInput: string;
```

- *Type:* string

---

##### `authUrlInput`<sup>Optional</sup> <a name="authUrlInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.authUrlInput"></a>

```typescript
public readonly authUrlInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientKeyInput"></a>

```typescript
public readonly clientKeyInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `customerIdInput`<sup>Optional</sup> <a name="customerIdInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.customerIdInput"></a>

```typescript
public readonly customerIdInput: string;
```

- *Type:* string

---

##### `accessClientId`<sup>Required</sup> <a name="accessClientId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.accessClientId"></a>

```typescript
public readonly accessClientId: string;
```

- *Type:* string

---

##### `accessClientSecret`<sup>Required</sup> <a name="accessClientSecret" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.accessClientSecret"></a>

```typescript
public readonly accessClientSecret: string;
```

- *Type:* string

---

##### `apiUrl`<sup>Required</sup> <a name="apiUrl" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.apiUrl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* string

---

##### `authUrl`<sup>Required</sup> <a name="authUrl" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.authUrl"></a>

```typescript
public readonly authUrl: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `customerId`<sup>Required</sup> <a name="customerId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.customerId"></a>

```typescript
public readonly customerId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustDevicePostureIntegrationConfigA;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA">ZeroTrustDevicePostureIntegrationConfigA</a>

---



