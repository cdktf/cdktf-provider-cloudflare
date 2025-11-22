# `tokenValidationRules` Submodule <a name="`tokenValidationRules` Submodule" id="@cdktf/provider-cloudflare.tokenValidationRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TokenValidationRules <a name="TokenValidationRules" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules cloudflare_token_validation_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer"></a>

```typescript
import { tokenValidationRules } from '@cdktf/provider-cloudflare'

new tokenValidationRules.TokenValidationRules(scope: Construct, id: string, config: TokenValidationRulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig">TokenValidationRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig">TokenValidationRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.putPosition">putPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.putSelector">putSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.resetPosition">resetPosition</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPosition` <a name="putPosition" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.putPosition"></a>

```typescript
public putPosition(value: TokenValidationRulesPosition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.putPosition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition">TokenValidationRulesPosition</a>

---

##### `putSelector` <a name="putSelector" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.putSelector"></a>

```typescript
public putSelector(value: TokenValidationRulesSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.putSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector">TokenValidationRulesSelector</a>

---

##### `resetPosition` <a name="resetPosition" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.resetPosition"></a>

```typescript
public resetPosition(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TokenValidationRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isConstruct"></a>

```typescript
import { tokenValidationRules } from '@cdktf/provider-cloudflare'

tokenValidationRules.TokenValidationRules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isTerraformElement"></a>

```typescript
import { tokenValidationRules } from '@cdktf/provider-cloudflare'

tokenValidationRules.TokenValidationRules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isTerraformResource"></a>

```typescript
import { tokenValidationRules } from '@cdktf/provider-cloudflare'

tokenValidationRules.TokenValidationRules.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.generateConfigForImport"></a>

```typescript
import { tokenValidationRules } from '@cdktf/provider-cloudflare'

tokenValidationRules.TokenValidationRules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a TokenValidationRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TokenValidationRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TokenValidationRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TokenValidationRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.lastUpdated">lastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.position">position</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference">TokenValidationRulesPositionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference">TokenValidationRulesSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.positionInput">positionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition">TokenValidationRulesPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.selectorInput">selectorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector">TokenValidationRulesSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.lastUpdated"></a>

```typescript
public readonly lastUpdated: string;
```

- *Type:* string

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.position"></a>

```typescript
public readonly position: TokenValidationRulesPositionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference">TokenValidationRulesPositionOutputReference</a>

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.selector"></a>

```typescript
public readonly selector: TokenValidationRulesSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference">TokenValidationRulesSelectorOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.positionInput"></a>

```typescript
public readonly positionInput: IResolvable | TokenValidationRulesPosition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition">TokenValidationRulesPosition</a>

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.selectorInput"></a>

```typescript
public readonly selectorInput: IResolvable | TokenValidationRulesSelector;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector">TokenValidationRulesSelector</a>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TokenValidationRulesConfig <a name="TokenValidationRulesConfig" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.Initializer"></a>

```typescript
import { tokenValidationRules } from '@cdktf/provider-cloudflare'

const tokenValidationRulesConfig: tokenValidationRules.TokenValidationRulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.action">action</a></code> | <code>string</code> | Action to take on requests that match operations included in `selector` and fail `expression`. Available values: "log", "block". |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.description">description</a></code> | <code>string</code> | A human-readable description that gives more details than `title`. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Toggle rule on or off. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.expression">expression</a></code> | <code>string</code> | Rule expression. Requests that fail to match this expression will be subject to `action`. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector">TokenValidationRulesSelector</a></code> | Select operations covered by this rule. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.title">title</a></code> | <code>string</code> | A human-readable name for the rule. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.position">position</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition">TokenValidationRulesPosition</a></code> | Update rule order among zone rules. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Action to take on requests that match operations included in `selector` and fail `expression`. Available values: "log", "block".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#action TokenValidationRules#action}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description that gives more details than `title`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#description TokenValidationRules#description}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Toggle rule on or off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#enabled TokenValidationRules#enabled}

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Rule expression. Requests that fail to match this expression will be subject to `action`.

For details on expressions, see the [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#expression TokenValidationRules#expression}

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.selector"></a>

```typescript
public readonly selector: TokenValidationRulesSelector;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector">TokenValidationRulesSelector</a>

Select operations covered by this rule.

For details on selectors, see the [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#selector TokenValidationRules#selector}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

A human-readable name for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#title TokenValidationRules#title}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#zone_id TokenValidationRules#zone_id}

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesConfig.property.position"></a>

```typescript
public readonly position: TokenValidationRulesPosition;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition">TokenValidationRulesPosition</a>

Update rule order among zone rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#position TokenValidationRules#position}

---

### TokenValidationRulesPosition <a name="TokenValidationRulesPosition" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition.Initializer"></a>

```typescript
import { tokenValidationRules } from '@cdktf/provider-cloudflare'

const tokenValidationRulesPosition: tokenValidationRules.TokenValidationRulesPosition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition.property.after">after</a></code> | <code>string</code> | Move rule to after rule with this ID. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition.property.before">before</a></code> | <code>string</code> | Move rule to before rule with this ID. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition.property.index">index</a></code> | <code>number</code> | Move rule to this position. |

---

##### `after`<sup>Optional</sup> <a name="after" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition.property.after"></a>

```typescript
public readonly after: string;
```

- *Type:* string

Move rule to after rule with this ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#after TokenValidationRules#after}

---

##### `before`<sup>Optional</sup> <a name="before" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition.property.before"></a>

```typescript
public readonly before: string;
```

- *Type:* string

Move rule to before rule with this ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#before TokenValidationRules#before}

---

##### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition.property.index"></a>

```typescript
public readonly index: number;
```

- *Type:* number

Move rule to this position.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#index TokenValidationRules#index}

---

### TokenValidationRulesSelector <a name="TokenValidationRulesSelector" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector.Initializer"></a>

```typescript
import { tokenValidationRules } from '@cdktf/provider-cloudflare'

const tokenValidationRulesSelector: tokenValidationRules.TokenValidationRulesSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector.property.exclude">exclude</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a>[]</code> | Ignore operations that were otherwise included by `include`. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector.property.include">include</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a>[]</code> | Select all matching operations. |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector.property.exclude"></a>

```typescript
public readonly exclude: IResolvable | TokenValidationRulesSelectorExclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a>[]

Ignore operations that were otherwise included by `include`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#exclude TokenValidationRules#exclude}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector.property.include"></a>

```typescript
public readonly include: IResolvable | TokenValidationRulesSelectorInclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a>[]

Select all matching operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#include TokenValidationRules#include}

---

### TokenValidationRulesSelectorExclude <a name="TokenValidationRulesSelectorExclude" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude.Initializer"></a>

```typescript
import { tokenValidationRules } from '@cdktf/provider-cloudflare'

const tokenValidationRulesSelectorExclude: tokenValidationRules.TokenValidationRulesSelectorExclude = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude.property.operationIds">operationIds</a></code> | <code>string[]</code> | Excluded operation IDs. |

---

##### `operationIds`<sup>Optional</sup> <a name="operationIds" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude.property.operationIds"></a>

```typescript
public readonly operationIds: string[];
```

- *Type:* string[]

Excluded operation IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#operation_ids TokenValidationRules#operation_ids}

---

### TokenValidationRulesSelectorInclude <a name="TokenValidationRulesSelectorInclude" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude.Initializer"></a>

```typescript
import { tokenValidationRules } from '@cdktf/provider-cloudflare'

const tokenValidationRulesSelectorInclude: tokenValidationRules.TokenValidationRulesSelectorInclude = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude.property.host">host</a></code> | <code>string[]</code> | Included hostnames. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude.property.host"></a>

```typescript
public readonly host: string[];
```

- *Type:* string[]

Included hostnames.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/token_validation_rules#host TokenValidationRules#host}

---

## Classes <a name="Classes" id="Classes"></a>

### TokenValidationRulesPositionOutputReference <a name="TokenValidationRulesPositionOutputReference" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.Initializer"></a>

```typescript
import { tokenValidationRules } from '@cdktf/provider-cloudflare'

new tokenValidationRules.TokenValidationRulesPositionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resetAfter">resetAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resetBefore">resetBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resetIndex">resetIndex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAfter` <a name="resetAfter" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resetAfter"></a>

```typescript
public resetAfter(): void
```

##### `resetBefore` <a name="resetBefore" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resetBefore"></a>

```typescript
public resetBefore(): void
```

##### `resetIndex` <a name="resetIndex" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.resetIndex"></a>

```typescript
public resetIndex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.afterInput">afterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.beforeInput">beforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.indexInput">indexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.after">after</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.before">before</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.index">index</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition">TokenValidationRulesPosition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `afterInput`<sup>Optional</sup> <a name="afterInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.afterInput"></a>

```typescript
public readonly afterInput: string;
```

- *Type:* string

---

##### `beforeInput`<sup>Optional</sup> <a name="beforeInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.beforeInput"></a>

```typescript
public readonly beforeInput: string;
```

- *Type:* string

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.indexInput"></a>

```typescript
public readonly indexInput: number;
```

- *Type:* number

---

##### `after`<sup>Required</sup> <a name="after" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.after"></a>

```typescript
public readonly after: string;
```

- *Type:* string

---

##### `before`<sup>Required</sup> <a name="before" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.before"></a>

```typescript
public readonly before: string;
```

- *Type:* string

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.index"></a>

```typescript
public readonly index: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPositionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TokenValidationRulesPosition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesPosition">TokenValidationRulesPosition</a>

---


### TokenValidationRulesSelectorExcludeList <a name="TokenValidationRulesSelectorExcludeList" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.Initializer"></a>

```typescript
import { tokenValidationRules } from '@cdktf/provider-cloudflare'

new tokenValidationRules.TokenValidationRulesSelectorExcludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.get"></a>

```typescript
public get(index: number): TokenValidationRulesSelectorExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TokenValidationRulesSelectorExclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a>[]

---


### TokenValidationRulesSelectorExcludeOutputReference <a name="TokenValidationRulesSelectorExcludeOutputReference" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer"></a>

```typescript
import { tokenValidationRules } from '@cdktf/provider-cloudflare'

new tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.resetOperationIds">resetOperationIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperationIds` <a name="resetOperationIds" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.resetOperationIds"></a>

```typescript
public resetOperationIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.operationIdsInput">operationIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.operationIds">operationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operationIdsInput`<sup>Optional</sup> <a name="operationIdsInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.operationIdsInput"></a>

```typescript
public readonly operationIdsInput: string[];
```

- *Type:* string[]

---

##### `operationIds`<sup>Required</sup> <a name="operationIds" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.operationIds"></a>

```typescript
public readonly operationIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TokenValidationRulesSelectorExclude;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a>

---


### TokenValidationRulesSelectorIncludeList <a name="TokenValidationRulesSelectorIncludeList" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.Initializer"></a>

```typescript
import { tokenValidationRules } from '@cdktf/provider-cloudflare'

new tokenValidationRules.TokenValidationRulesSelectorIncludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.get"></a>

```typescript
public get(index: number): TokenValidationRulesSelectorIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TokenValidationRulesSelectorInclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a>[]

---


### TokenValidationRulesSelectorIncludeOutputReference <a name="TokenValidationRulesSelectorIncludeOutputReference" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer"></a>

```typescript
import { tokenValidationRules } from '@cdktf/provider-cloudflare'

new tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.resetHost">resetHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.hostInput">hostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.host">host</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string[];
```

- *Type:* string[]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.host"></a>

```typescript
public readonly host: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TokenValidationRulesSelectorInclude;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a>

---


### TokenValidationRulesSelectorOutputReference <a name="TokenValidationRulesSelectorOutputReference" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.Initializer"></a>

```typescript
import { tokenValidationRules } from '@cdktf/provider-cloudflare'

new tokenValidationRules.TokenValidationRulesSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.putExclude">putExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.putInclude">putInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclude` <a name="putExclude" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.putExclude"></a>

```typescript
public putExclude(value: IResolvable | TokenValidationRulesSelectorExclude[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.putExclude.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a>[]

---

##### `putInclude` <a name="putInclude" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.putInclude"></a>

```typescript
public putInclude(value: IResolvable | TokenValidationRulesSelectorInclude[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.putInclude.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a>[]

---

##### `resetExclude` <a name="resetExclude" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.resetExclude"></a>

```typescript
public resetExclude(): void
```

##### `resetInclude` <a name="resetInclude" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.resetInclude"></a>

```typescript
public resetInclude(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.exclude">exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList">TokenValidationRulesSelectorExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.include">include</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList">TokenValidationRulesSelectorIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.excludeInput">excludeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.includeInput">includeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector">TokenValidationRulesSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.exclude"></a>

```typescript
public readonly exclude: TokenValidationRulesSelectorExcludeList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExcludeList">TokenValidationRulesSelectorExcludeList</a>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.include"></a>

```typescript
public readonly include: TokenValidationRulesSelectorIncludeList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorIncludeList">TokenValidationRulesSelectorIncludeList</a>

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.excludeInput"></a>

```typescript
public readonly excludeInput: IResolvable | TokenValidationRulesSelectorExclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorExclude">TokenValidationRulesSelectorExclude</a>[]

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.includeInput"></a>

```typescript
public readonly includeInput: IResolvable | TokenValidationRulesSelectorInclude[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorInclude">TokenValidationRulesSelectorInclude</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TokenValidationRulesSelector;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tokenValidationRules.TokenValidationRulesSelector">TokenValidationRulesSelector</a>

---



