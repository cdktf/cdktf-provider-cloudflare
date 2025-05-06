# `authenticatedOriginPulls` Submodule <a name="`authenticatedOriginPulls` Submodule" id="@cdktf/provider-cloudflare.authenticatedOriginPulls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthenticatedOriginPulls <a name="AuthenticatedOriginPulls" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/authenticated_origin_pulls cloudflare_authenticated_origin_pulls}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer"></a>

```typescript
import { authenticatedOriginPulls } from '@cdktf/provider-cloudflare'

new authenticatedOriginPulls.AuthenticatedOriginPulls(scope: Construct, id: string, config: AuthenticatedOriginPullsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig">AuthenticatedOriginPullsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig">AuthenticatedOriginPullsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.resetHostname">resetHostname</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.putConfig"></a>

```typescript
public putConfig(value: IResolvable | AuthenticatedOriginPullsConfigA[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.putConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA">AuthenticatedOriginPullsConfigA</a>[]

---

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.resetHostname"></a>

```typescript
public resetHostname(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AuthenticatedOriginPulls resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isConstruct"></a>

```typescript
import { authenticatedOriginPulls } from '@cdktf/provider-cloudflare'

authenticatedOriginPulls.AuthenticatedOriginPulls.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isTerraformElement"></a>

```typescript
import { authenticatedOriginPulls } from '@cdktf/provider-cloudflare'

authenticatedOriginPulls.AuthenticatedOriginPulls.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isTerraformResource"></a>

```typescript
import { authenticatedOriginPulls } from '@cdktf/provider-cloudflare'

authenticatedOriginPulls.AuthenticatedOriginPulls.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.generateConfigForImport"></a>

```typescript
import { authenticatedOriginPulls } from '@cdktf/provider-cloudflare'

authenticatedOriginPulls.AuthenticatedOriginPulls.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AuthenticatedOriginPulls resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AuthenticatedOriginPulls to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AuthenticatedOriginPulls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/authenticated_origin_pulls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AuthenticatedOriginPulls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certId">certId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certStatus">certStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certUpdatedAt">certUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certUploadedOn">certUploadedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList">AuthenticatedOriginPullsConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.configInput">configInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA">AuthenticatedOriginPullsConfigA</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certId`<sup>Required</sup> <a name="certId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certId"></a>

```typescript
public readonly certId: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `certStatus`<sup>Required</sup> <a name="certStatus" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certStatus"></a>

```typescript
public readonly certStatus: string;
```

- *Type:* string

---

##### `certUpdatedAt`<sup>Required</sup> <a name="certUpdatedAt" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certUpdatedAt"></a>

```typescript
public readonly certUpdatedAt: string;
```

- *Type:* string

---

##### `certUploadedOn`<sup>Required</sup> <a name="certUploadedOn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.certUploadedOn"></a>

```typescript
public readonly certUploadedOn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.config"></a>

```typescript
public readonly config: AuthenticatedOriginPullsConfigAList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList">AuthenticatedOriginPullsConfigAList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.configInput"></a>

```typescript
public readonly configInput: IResolvable | AuthenticatedOriginPullsConfigA[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA">AuthenticatedOriginPullsConfigA</a>[]

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPulls.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthenticatedOriginPullsConfig <a name="AuthenticatedOriginPullsConfig" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.Initializer"></a>

```typescript
import { authenticatedOriginPulls } from '@cdktf/provider-cloudflare'

const authenticatedOriginPullsConfig: authenticatedOriginPulls.AuthenticatedOriginPullsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.config">config</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA">AuthenticatedOriginPullsConfigA</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/authenticated_origin_pulls#config AuthenticatedOriginPulls#config}. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.hostname">hostname</a></code> | <code>string</code> | The hostname on the origin for which the client certificate uploaded will be used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.config"></a>

```typescript
public readonly config: IResolvable | AuthenticatedOriginPullsConfigA[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA">AuthenticatedOriginPullsConfigA</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/authenticated_origin_pulls#config AuthenticatedOriginPulls#config}.

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/authenticated_origin_pulls#zone_id AuthenticatedOriginPulls#zone_id}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

The hostname on the origin for which the client certificate uploaded will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/authenticated_origin_pulls#hostname AuthenticatedOriginPulls#hostname}

---

### AuthenticatedOriginPullsConfigA <a name="AuthenticatedOriginPullsConfigA" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA.Initializer"></a>

```typescript
import { authenticatedOriginPulls } from '@cdktf/provider-cloudflare'

const authenticatedOriginPullsConfigA: authenticatedOriginPulls.AuthenticatedOriginPullsConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA.property.certId">certId</a></code> | <code>string</code> | Certificate identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether hostname-level authenticated origin pulls is enabled. A null value voids the association. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA.property.hostname">hostname</a></code> | <code>string</code> | The hostname on the origin for which the client certificate uploaded will be used. |

---

##### `certId`<sup>Optional</sup> <a name="certId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA.property.certId"></a>

```typescript
public readonly certId: string;
```

- *Type:* string

Certificate identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/authenticated_origin_pulls#cert_id AuthenticatedOriginPulls#cert_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether hostname-level authenticated origin pulls is enabled. A null value voids the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/authenticated_origin_pulls#enabled AuthenticatedOriginPulls#enabled}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

The hostname on the origin for which the client certificate uploaded will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/authenticated_origin_pulls#hostname AuthenticatedOriginPulls#hostname}

---

## Classes <a name="Classes" id="Classes"></a>

### AuthenticatedOriginPullsConfigAList <a name="AuthenticatedOriginPullsConfigAList" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.Initializer"></a>

```typescript
import { authenticatedOriginPulls } from '@cdktf/provider-cloudflare'

new authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.get"></a>

```typescript
public get(index: number): AuthenticatedOriginPullsConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA">AuthenticatedOriginPullsConfigA</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuthenticatedOriginPullsConfigA[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA">AuthenticatedOriginPullsConfigA</a>[]

---


### AuthenticatedOriginPullsConfigAOutputReference <a name="AuthenticatedOriginPullsConfigAOutputReference" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer"></a>

```typescript
import { authenticatedOriginPulls } from '@cdktf/provider-cloudflare'

new authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resetCertId">resetCertId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resetHostname">resetHostname</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertId` <a name="resetCertId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resetCertId"></a>

```typescript
public resetCertId(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.resetHostname"></a>

```typescript
public resetHostname(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.certIdInput">certIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.certId">certId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA">AuthenticatedOriginPullsConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certIdInput`<sup>Optional</sup> <a name="certIdInput" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.certIdInput"></a>

```typescript
public readonly certIdInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `certId`<sup>Required</sup> <a name="certId" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.certId"></a>

```typescript
public readonly certId: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuthenticatedOriginPullsConfigA;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.authenticatedOriginPulls.AuthenticatedOriginPullsConfigA">AuthenticatedOriginPullsConfigA</a>

---



