# `emailSecurityImpersonationRegistry` Submodule <a name="`emailSecurityImpersonationRegistry` Submodule" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailSecurityImpersonationRegistry <a name="EmailSecurityImpersonationRegistry" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/email_security_impersonation_registry cloudflare_email_security_impersonation_registry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.Initializer"></a>

```typescript
import { emailSecurityImpersonationRegistry } from '@cdktf/provider-cloudflare'

new emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry(scope: Construct, id: string, config: EmailSecurityImpersonationRegistryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig">EmailSecurityImpersonationRegistryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig">EmailSecurityImpersonationRegistryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EmailSecurityImpersonationRegistry resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isConstruct"></a>

```typescript
import { emailSecurityImpersonationRegistry } from '@cdktf/provider-cloudflare'

emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isTerraformElement"></a>

```typescript
import { emailSecurityImpersonationRegistry } from '@cdktf/provider-cloudflare'

emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isTerraformResource"></a>

```typescript
import { emailSecurityImpersonationRegistry } from '@cdktf/provider-cloudflare'

emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.generateConfigForImport"></a>

```typescript
import { emailSecurityImpersonationRegistry } from '@cdktf/provider-cloudflare'

emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EmailSecurityImpersonationRegistry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EmailSecurityImpersonationRegistry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EmailSecurityImpersonationRegistry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/email_security_impersonation_registry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EmailSecurityImpersonationRegistry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.comments">comments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.directoryId">directoryId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.directoryNodeId">directoryNodeId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.externalDirectoryNodeId">externalDirectoryNodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.provenance">provenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.isEmailRegexInput">isEmailRegexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.isEmailRegex">isEmailRegex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `comments`<sup>Required</sup> <a name="comments" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.comments"></a>

```typescript
public readonly comments: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.directoryId"></a>

```typescript
public readonly directoryId: number;
```

- *Type:* number

---

##### `directoryNodeId`<sup>Required</sup> <a name="directoryNodeId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.directoryNodeId"></a>

```typescript
public readonly directoryNodeId: number;
```

- *Type:* number

---

##### `externalDirectoryNodeId`<sup>Required</sup> <a name="externalDirectoryNodeId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.externalDirectoryNodeId"></a>

```typescript
public readonly externalDirectoryNodeId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `provenance`<sup>Required</sup> <a name="provenance" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.provenance"></a>

```typescript
public readonly provenance: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `isEmailRegexInput`<sup>Optional</sup> <a name="isEmailRegexInput" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.isEmailRegexInput"></a>

```typescript
public readonly isEmailRegexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `isEmailRegex`<sup>Required</sup> <a name="isEmailRegex" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.isEmailRegex"></a>

```typescript
public readonly isEmailRegex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailSecurityImpersonationRegistryConfig <a name="EmailSecurityImpersonationRegistryConfig" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.Initializer"></a>

```typescript
import { emailSecurityImpersonationRegistry } from '@cdktf/provider-cloudflare'

const emailSecurityImpersonationRegistryConfig: emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.accountId">accountId</a></code> | <code>string</code> | Account Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/email_security_impersonation_registry#email EmailSecurityImpersonationRegistry#email}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.isEmailRegex">isEmailRegex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/email_security_impersonation_registry#is_email_regex EmailSecurityImpersonationRegistry#is_email_regex}. |
| <code><a href="#@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/email_security_impersonation_registry#name EmailSecurityImpersonationRegistry#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/email_security_impersonation_registry#account_id EmailSecurityImpersonationRegistry#account_id}

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/email_security_impersonation_registry#email EmailSecurityImpersonationRegistry#email}.

---

##### `isEmailRegex`<sup>Required</sup> <a name="isEmailRegex" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.isEmailRegex"></a>

```typescript
public readonly isEmailRegex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/email_security_impersonation_registry#is_email_regex EmailSecurityImpersonationRegistry#is_email_regex}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/email_security_impersonation_registry#name EmailSecurityImpersonationRegistry#name}.

---



