# `customHostnameFallbackOrigin` Submodule <a name="`customHostnameFallbackOrigin` Submodule" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomHostnameFallbackOrigin <a name="CustomHostnameFallbackOrigin" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/custom_hostname_fallback_origin cloudflare_custom_hostname_fallback_origin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer"></a>

```typescript
import { customHostnameFallbackOrigin } from '@cdktf/provider-cloudflare'

new customHostnameFallbackOrigin.CustomHostnameFallbackOrigin(scope: Construct, id: string, config: CustomHostnameFallbackOriginConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig">CustomHostnameFallbackOriginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig">CustomHostnameFallbackOriginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CustomHostnameFallbackOrigin resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.isConstruct"></a>

```typescript
import { customHostnameFallbackOrigin } from '@cdktf/provider-cloudflare'

customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.isTerraformElement"></a>

```typescript
import { customHostnameFallbackOrigin } from '@cdktf/provider-cloudflare'

customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.isTerraformResource"></a>

```typescript
import { customHostnameFallbackOrigin } from '@cdktf/provider-cloudflare'

customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.generateConfigForImport"></a>

```typescript
import { customHostnameFallbackOrigin } from '@cdktf/provider-cloudflare'

customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CustomHostnameFallbackOrigin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomHostnameFallbackOrigin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomHostnameFallbackOrigin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/custom_hostname_fallback_origin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CustomHostnameFallbackOrigin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.errors">errors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.originInput">originInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.errors"></a>

```typescript
public readonly errors: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.originInput"></a>

```typescript
public readonly originInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomHostnameFallbackOriginConfig <a name="CustomHostnameFallbackOriginConfig" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.Initializer"></a>

```typescript
import { customHostnameFallbackOrigin } from '@cdktf/provider-cloudflare'

const customHostnameFallbackOriginConfig: customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.origin">origin</a></code> | <code>string</code> | Your origin hostname that requests to your custom hostnames will be sent to. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

Your origin hostname that requests to your custom hostnames will be sent to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/custom_hostname_fallback_origin#origin CustomHostnameFallbackOrigin#origin}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/custom_hostname_fallback_origin#zone_id CustomHostnameFallbackOrigin#zone_id}

---



