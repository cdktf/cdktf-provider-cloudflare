# `dnsRecord` Submodule <a name="`dnsRecord` Submodule" id="@cdktf/provider-cloudflare.dnsRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsRecord <a name="DnsRecord" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record cloudflare_dns_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer"></a>

```typescript
import { dnsRecord } from '@cdktf/provider-cloudflare'

new dnsRecord.DnsRecord(scope: Construct, id: string, config: DnsRecordConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig">DnsRecordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig">DnsRecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData">putData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetProxied">resetProxied</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putData` <a name="putData" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData"></a>

```typescript
public putData(value: DnsRecordData): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a>

---

##### `putSettings` <a name="putSettings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putSettings"></a>

```typescript
public putSettings(value: DnsRecordSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetContent` <a name="resetContent" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetData` <a name="resetData" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetData"></a>

```typescript
public resetData(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetProxied` <a name="resetProxied" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetProxied"></a>

```typescript
public resetProxied(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DnsRecord resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isConstruct"></a>

```typescript
import { dnsRecord } from '@cdktf/provider-cloudflare'

dnsRecord.DnsRecord.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformElement"></a>

```typescript
import { dnsRecord } from '@cdktf/provider-cloudflare'

dnsRecord.DnsRecord.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformResource"></a>

```typescript
import { dnsRecord } from '@cdktf/provider-cloudflare'

dnsRecord.DnsRecord.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport"></a>

```typescript
import { dnsRecord } from '@cdktf/provider-cloudflare'

dnsRecord.DnsRecord.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DnsRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DnsRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DnsRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DnsRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.commentModifiedOn">commentModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.data">data</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference">DnsRecordDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.meta">meta</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxiable">proxiable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference">DnsRecordSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tagsModifiedOn">tagsModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.dataInput">dataInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxiedInput">proxiedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.settingsInput">settingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxied">proxied</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `commentModifiedOn`<sup>Required</sup> <a name="commentModifiedOn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.commentModifiedOn"></a>

```typescript
public readonly commentModifiedOn: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.data"></a>

```typescript
public readonly data: DnsRecordDataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference">DnsRecordDataOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.meta"></a>

```typescript
public readonly meta: string;
```

- *Type:* string

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `proxiable`<sup>Required</sup> <a name="proxiable" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxiable"></a>

```typescript
public readonly proxiable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.settings"></a>

```typescript
public readonly settings: DnsRecordSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference">DnsRecordSettingsOutputReference</a>

---

##### `tagsModifiedOn`<sup>Required</sup> <a name="tagsModifiedOn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tagsModifiedOn"></a>

```typescript
public readonly tagsModifiedOn: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.dataInput"></a>

```typescript
public readonly dataInput: IResolvable | DnsRecordData;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `proxiedInput`<sup>Optional</sup> <a name="proxiedInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxiedInput"></a>

```typescript
public readonly proxiedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | DnsRecordSettings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `proxied`<sup>Required</sup> <a name="proxied" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxied"></a>

```typescript
public readonly proxied: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsRecordConfig <a name="DnsRecordConfig" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.Initializer"></a>

```typescript
import { dnsRecord } from '@cdktf/provider-cloudflare'

const dnsRecordConfig: dnsRecord.DnsRecordConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.name">name</a></code> | <code>string</code> | DNS record name (or @ for the zone apex) in Punycode. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.ttl">ttl</a></code> | <code>number</code> | Time To Live (TTL) of the DNS record in seconds. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.type">type</a></code> | <code>string</code> | Record type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.comment">comment</a></code> | <code>string</code> | Comments or notes about the DNS record. This field has no effect on DNS responses. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.content">content</a></code> | <code>string</code> | A valid IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.data">data</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a></code> | Components of a CAA record. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.priority">priority</a></code> | <code>number</code> | Required for MX, SRV and URI records; unused by other record types. Records with lower priorities are preferred. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.proxied">proxied</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the record is receiving the performance and security benefits of Cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a></code> | Settings for the DNS record. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.tags">tags</a></code> | <code>string[]</code> | Custom tags for the DNS record. This field has no effect on DNS responses. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

DNS record name (or @ for the zone apex) in Punycode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#name DnsRecord#name}

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

Time To Live (TTL) of the DNS record in seconds.

Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#ttl DnsRecord#ttl}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Record type.

Available values: "A", "AAAA", "CNAME", "MX", "NS", "OPENPGPKEY", "PTR", "TXT", "CAA", "CERT", "DNSKEY", "DS", "HTTPS", "LOC", "NAPTR", "SMIMEA", "SRV", "SSHFP", "SVCB", "TLSA", "URI".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#type DnsRecord#type}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#zone_id DnsRecord#zone_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Comments or notes about the DNS record. This field has no effect on DNS responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#comment DnsRecord#comment}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#content DnsRecord#content}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.data"></a>

```typescript
public readonly data: DnsRecordData;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a>

Components of a CAA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#data DnsRecord#data}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Required for MX, SRV and URI records; unused by other record types. Records with lower priorities are preferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#priority DnsRecord#priority}

---

##### `proxied`<sup>Optional</sup> <a name="proxied" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.proxied"></a>

```typescript
public readonly proxied: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the record is receiving the performance and security benefits of Cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#proxied DnsRecord#proxied}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.settings"></a>

```typescript
public readonly settings: DnsRecordSettings;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a>

Settings for the DNS record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#settings DnsRecord#settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Custom tags for the DNS record. This field has no effect on DNS responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#tags DnsRecord#tags}

---

### DnsRecordData <a name="DnsRecordData" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.Initializer"></a>

```typescript
import { dnsRecord } from '@cdktf/provider-cloudflare'

const dnsRecordData: dnsRecord.DnsRecordData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.algorithm">algorithm</a></code> | <code>number</code> | Algorithm. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.altitude">altitude</a></code> | <code>number</code> | Altitude of location in meters. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.certificate">certificate</a></code> | <code>string</code> | Certificate. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.digest">digest</a></code> | <code>string</code> | Digest. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.digestType">digestType</a></code> | <code>number</code> | Digest Type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.fingerprint">fingerprint</a></code> | <code>string</code> | Fingerprint. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.flags">flags</a></code> | <code>{[ key: string ]: any}</code> | Flags for the CAA record. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.keyTag">keyTag</a></code> | <code>number</code> | Key Tag. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latDegrees">latDegrees</a></code> | <code>number</code> | Degrees of latitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latDirection">latDirection</a></code> | <code>string</code> | Latitude direction. Available values: "N", "S". |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latMinutes">latMinutes</a></code> | <code>number</code> | Minutes of latitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latSeconds">latSeconds</a></code> | <code>number</code> | Seconds of latitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longDegrees">longDegrees</a></code> | <code>number</code> | Degrees of longitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longDirection">longDirection</a></code> | <code>string</code> | Longitude direction. Available values: "E", "W". |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longMinutes">longMinutes</a></code> | <code>number</code> | Minutes of longitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longSeconds">longSeconds</a></code> | <code>number</code> | Seconds of longitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.matchingType">matchingType</a></code> | <code>number</code> | Matching Type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.order">order</a></code> | <code>number</code> | Order. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.port">port</a></code> | <code>number</code> | The port of the service. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.precisionHorz">precisionHorz</a></code> | <code>number</code> | Horizontal precision of location. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.precisionVert">precisionVert</a></code> | <code>number</code> | Vertical precision of location. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.preference">preference</a></code> | <code>number</code> | Preference. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.priority">priority</a></code> | <code>number</code> | Priority. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.protocol">protocol</a></code> | <code>number</code> | Protocol. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.publicKey">publicKey</a></code> | <code>string</code> | Public Key. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.regex">regex</a></code> | <code>string</code> | Regex. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.replacement">replacement</a></code> | <code>string</code> | Replacement. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.selector">selector</a></code> | <code>number</code> | Selector. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.service">service</a></code> | <code>string</code> | Service. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.size">size</a></code> | <code>number</code> | Size of location in meters. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.tag">tag</a></code> | <code>string</code> | Name of the property controlled by this record (e.g.: issue, issuewild, iodef). |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.target">target</a></code> | <code>string</code> | Target. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.type">type</a></code> | <code>number</code> | Type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.usage">usage</a></code> | <code>number</code> | Usage. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.value">value</a></code> | <code>string</code> | Value of the record. This field's semantics depend on the chosen tag. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.weight">weight</a></code> | <code>number</code> | The record weight. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.algorithm"></a>

```typescript
public readonly algorithm: number;
```

- *Type:* number

Algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#algorithm DnsRecord#algorithm}

---

##### `altitude`<sup>Optional</sup> <a name="altitude" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.altitude"></a>

```typescript
public readonly altitude: number;
```

- *Type:* number

Altitude of location in meters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#altitude DnsRecord#altitude}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#certificate DnsRecord#certificate}

---

##### `digest`<sup>Optional</sup> <a name="digest" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.digest"></a>

```typescript
public readonly digest: string;
```

- *Type:* string

Digest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#digest DnsRecord#digest}

---

##### `digestType`<sup>Optional</sup> <a name="digestType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.digestType"></a>

```typescript
public readonly digestType: number;
```

- *Type:* number

Digest Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#digest_type DnsRecord#digest_type}

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

Fingerprint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#fingerprint DnsRecord#fingerprint}

---

##### `flags`<sup>Optional</sup> <a name="flags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.flags"></a>

```typescript
public readonly flags: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Flags for the CAA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#flags DnsRecord#flags}

---

##### `keyTag`<sup>Optional</sup> <a name="keyTag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.keyTag"></a>

```typescript
public readonly keyTag: number;
```

- *Type:* number

Key Tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#key_tag DnsRecord#key_tag}

---

##### `latDegrees`<sup>Optional</sup> <a name="latDegrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latDegrees"></a>

```typescript
public readonly latDegrees: number;
```

- *Type:* number

Degrees of latitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#lat_degrees DnsRecord#lat_degrees}

---

##### `latDirection`<sup>Optional</sup> <a name="latDirection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latDirection"></a>

```typescript
public readonly latDirection: string;
```

- *Type:* string

Latitude direction. Available values: "N", "S".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#lat_direction DnsRecord#lat_direction}

---

##### `latMinutes`<sup>Optional</sup> <a name="latMinutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latMinutes"></a>

```typescript
public readonly latMinutes: number;
```

- *Type:* number

Minutes of latitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#lat_minutes DnsRecord#lat_minutes}

---

##### `latSeconds`<sup>Optional</sup> <a name="latSeconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latSeconds"></a>

```typescript
public readonly latSeconds: number;
```

- *Type:* number

Seconds of latitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#lat_seconds DnsRecord#lat_seconds}

---

##### `longDegrees`<sup>Optional</sup> <a name="longDegrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longDegrees"></a>

```typescript
public readonly longDegrees: number;
```

- *Type:* number

Degrees of longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#long_degrees DnsRecord#long_degrees}

---

##### `longDirection`<sup>Optional</sup> <a name="longDirection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longDirection"></a>

```typescript
public readonly longDirection: string;
```

- *Type:* string

Longitude direction. Available values: "E", "W".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#long_direction DnsRecord#long_direction}

---

##### `longMinutes`<sup>Optional</sup> <a name="longMinutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longMinutes"></a>

```typescript
public readonly longMinutes: number;
```

- *Type:* number

Minutes of longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#long_minutes DnsRecord#long_minutes}

---

##### `longSeconds`<sup>Optional</sup> <a name="longSeconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longSeconds"></a>

```typescript
public readonly longSeconds: number;
```

- *Type:* number

Seconds of longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#long_seconds DnsRecord#long_seconds}

---

##### `matchingType`<sup>Optional</sup> <a name="matchingType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.matchingType"></a>

```typescript
public readonly matchingType: number;
```

- *Type:* number

Matching Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#matching_type DnsRecord#matching_type}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

Order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#order DnsRecord#order}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#port DnsRecord#port}

---

##### `precisionHorz`<sup>Optional</sup> <a name="precisionHorz" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.precisionHorz"></a>

```typescript
public readonly precisionHorz: number;
```

- *Type:* number

Horizontal precision of location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#precision_horz DnsRecord#precision_horz}

---

##### `precisionVert`<sup>Optional</sup> <a name="precisionVert" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.precisionVert"></a>

```typescript
public readonly precisionVert: number;
```

- *Type:* number

Vertical precision of location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#precision_vert DnsRecord#precision_vert}

---

##### `preference`<sup>Optional</sup> <a name="preference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.preference"></a>

```typescript
public readonly preference: number;
```

- *Type:* number

Preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#preference DnsRecord#preference}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#priority DnsRecord#priority}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.protocol"></a>

```typescript
public readonly protocol: number;
```

- *Type:* number

Protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#protocol DnsRecord#protocol}

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

Public Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#public_key DnsRecord#public_key}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#regex DnsRecord#regex}

---

##### `replacement`<sup>Optional</sup> <a name="replacement" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.replacement"></a>

```typescript
public readonly replacement: string;
```

- *Type:* string

Replacement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#replacement DnsRecord#replacement}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.selector"></a>

```typescript
public readonly selector: number;
```

- *Type:* number

Selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#selector DnsRecord#selector}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#service DnsRecord#service}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Size of location in meters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#size DnsRecord#size}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

Name of the property controlled by this record (e.g.: issue, issuewild, iodef).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#tag DnsRecord#tag}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#target DnsRecord#target}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#type DnsRecord#type}

---

##### `usage`<sup>Optional</sup> <a name="usage" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.usage"></a>

```typescript
public readonly usage: number;
```

- *Type:* number

Usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#usage DnsRecord#usage}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the record. This field's semantics depend on the chosen tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#value DnsRecord#value}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

The record weight.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#weight DnsRecord#weight}

---

### DnsRecordSettings <a name="DnsRecordSettings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.Initializer"></a>

```typescript
import { dnsRecord } from '@cdktf/provider-cloudflare'

const dnsRecordSettings: dnsRecord.DnsRecordSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.flattenCname">flattenCname</a></code> | <code>boolean \| cdktf.IResolvable</code> | If enabled, causes the CNAME record to be resolved externally and the resulting address records (e.g., A and AAAA) to be returned instead of the CNAME record itself. This setting is unavailable for proxied records, since they are always flattened. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.ipv4Only">ipv4Only</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled, only A records will be generated, and AAAA records will not be created. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.ipv6Only">ipv6Only</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled, only AAAA records will be generated, and A records will not be created. |

---

##### `flattenCname`<sup>Optional</sup> <a name="flattenCname" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.flattenCname"></a>

```typescript
public readonly flattenCname: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If enabled, causes the CNAME record to be resolved externally and the resulting address records (e.g., A and AAAA) to be returned instead of the CNAME record itself. This setting is unavailable for proxied records, since they are always flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#flatten_cname DnsRecord#flatten_cname}

---

##### `ipv4Only`<sup>Optional</sup> <a name="ipv4Only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.ipv4Only"></a>

```typescript
public readonly ipv4Only: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled, only A records will be generated, and AAAA records will not be created.

This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#ipv4_only DnsRecord#ipv4_only}

---

##### `ipv6Only`<sup>Optional</sup> <a name="ipv6Only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.ipv6Only"></a>

```typescript
public readonly ipv6Only: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled, only AAAA records will be generated, and A records will not be created.

This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/dns_record#ipv6_only DnsRecord#ipv6_only}

---

## Classes <a name="Classes" id="Classes"></a>

### DnsRecordDataOutputReference <a name="DnsRecordDataOutputReference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.Initializer"></a>

```typescript
import { dnsRecord } from '@cdktf/provider-cloudflare'

new dnsRecord.DnsRecordDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetAltitude">resetAltitude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetDigest">resetDigest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetDigestType">resetDigestType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetFingerprint">resetFingerprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetFlags">resetFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetKeyTag">resetKeyTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatDegrees">resetLatDegrees</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatDirection">resetLatDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatMinutes">resetLatMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatSeconds">resetLatSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongDegrees">resetLongDegrees</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongDirection">resetLongDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongMinutes">resetLongMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongSeconds">resetLongSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetMatchingType">resetMatchingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPrecisionHorz">resetPrecisionHorz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPrecisionVert">resetPrecisionVert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPreference">resetPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPublicKey">resetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetReplacement">resetReplacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetSelector">resetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetUsage">resetUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetAlgorithm"></a>

```typescript
public resetAlgorithm(): void
```

##### `resetAltitude` <a name="resetAltitude" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetAltitude"></a>

```typescript
public resetAltitude(): void
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetDigest` <a name="resetDigest" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetDigest"></a>

```typescript
public resetDigest(): void
```

##### `resetDigestType` <a name="resetDigestType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetDigestType"></a>

```typescript
public resetDigestType(): void
```

##### `resetFingerprint` <a name="resetFingerprint" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetFingerprint"></a>

```typescript
public resetFingerprint(): void
```

##### `resetFlags` <a name="resetFlags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetFlags"></a>

```typescript
public resetFlags(): void
```

##### `resetKeyTag` <a name="resetKeyTag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetKeyTag"></a>

```typescript
public resetKeyTag(): void
```

##### `resetLatDegrees` <a name="resetLatDegrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatDegrees"></a>

```typescript
public resetLatDegrees(): void
```

##### `resetLatDirection` <a name="resetLatDirection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatDirection"></a>

```typescript
public resetLatDirection(): void
```

##### `resetLatMinutes` <a name="resetLatMinutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatMinutes"></a>

```typescript
public resetLatMinutes(): void
```

##### `resetLatSeconds` <a name="resetLatSeconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatSeconds"></a>

```typescript
public resetLatSeconds(): void
```

##### `resetLongDegrees` <a name="resetLongDegrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongDegrees"></a>

```typescript
public resetLongDegrees(): void
```

##### `resetLongDirection` <a name="resetLongDirection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongDirection"></a>

```typescript
public resetLongDirection(): void
```

##### `resetLongMinutes` <a name="resetLongMinutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongMinutes"></a>

```typescript
public resetLongMinutes(): void
```

##### `resetLongSeconds` <a name="resetLongSeconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongSeconds"></a>

```typescript
public resetLongSeconds(): void
```

##### `resetMatchingType` <a name="resetMatchingType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetMatchingType"></a>

```typescript
public resetMatchingType(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPrecisionHorz` <a name="resetPrecisionHorz" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPrecisionHorz"></a>

```typescript
public resetPrecisionHorz(): void
```

##### `resetPrecisionVert` <a name="resetPrecisionVert" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPrecisionVert"></a>

```typescript
public resetPrecisionVert(): void
```

##### `resetPreference` <a name="resetPreference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPreference"></a>

```typescript
public resetPreference(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetPublicKey` <a name="resetPublicKey" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPublicKey"></a>

```typescript
public resetPublicKey(): void
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```

##### `resetReplacement` <a name="resetReplacement" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetReplacement"></a>

```typescript
public resetReplacement(): void
```

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetSelector"></a>

```typescript
public resetSelector(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetService"></a>

```typescript
public resetService(): void
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetSize"></a>

```typescript
public resetSize(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUsage` <a name="resetUsage" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetUsage"></a>

```typescript
public resetUsage(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.altitudeInput">altitudeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestInput">digestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestTypeInput">digestTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fingerprintInput">fingerprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.flagsInput">flagsInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.keyTagInput">keyTagInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDegreesInput">latDegreesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDirectionInput">latDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latMinutesInput">latMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latSecondsInput">latSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDegreesInput">longDegreesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDirectionInput">longDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longMinutesInput">longMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longSecondsInput">longSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.matchingTypeInput">matchingTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.orderInput">orderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionHorzInput">precisionHorzInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionVertInput">precisionVertInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.preferenceInput">preferenceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.protocolInput">protocolInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.publicKeyInput">publicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.replacementInput">replacementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.selectorInput">selectorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.typeInput">typeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.usageInput">usageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.algorithm">algorithm</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.altitude">altitude</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digest">digest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestType">digestType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.flags">flags</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.keyTag">keyTag</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDegrees">latDegrees</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDirection">latDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latMinutes">latMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latSeconds">latSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDegrees">longDegrees</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDirection">longDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longMinutes">longMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longSeconds">longSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.matchingType">matchingType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.order">order</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionHorz">precisionHorz</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionVert">precisionVert</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.preference">preference</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.protocol">protocol</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.replacement">replacement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.selector">selector</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.type">type</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.usage">usage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: number;
```

- *Type:* number

---

##### `altitudeInput`<sup>Optional</sup> <a name="altitudeInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.altitudeInput"></a>

```typescript
public readonly altitudeInput: number;
```

- *Type:* number

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `digestInput`<sup>Optional</sup> <a name="digestInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestInput"></a>

```typescript
public readonly digestInput: string;
```

- *Type:* string

---

##### `digestTypeInput`<sup>Optional</sup> <a name="digestTypeInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestTypeInput"></a>

```typescript
public readonly digestTypeInput: number;
```

- *Type:* number

---

##### `fingerprintInput`<sup>Optional</sup> <a name="fingerprintInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fingerprintInput"></a>

```typescript
public readonly fingerprintInput: string;
```

- *Type:* string

---

##### `flagsInput`<sup>Optional</sup> <a name="flagsInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.flagsInput"></a>

```typescript
public readonly flagsInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `keyTagInput`<sup>Optional</sup> <a name="keyTagInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.keyTagInput"></a>

```typescript
public readonly keyTagInput: number;
```

- *Type:* number

---

##### `latDegreesInput`<sup>Optional</sup> <a name="latDegreesInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDegreesInput"></a>

```typescript
public readonly latDegreesInput: number;
```

- *Type:* number

---

##### `latDirectionInput`<sup>Optional</sup> <a name="latDirectionInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDirectionInput"></a>

```typescript
public readonly latDirectionInput: string;
```

- *Type:* string

---

##### `latMinutesInput`<sup>Optional</sup> <a name="latMinutesInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latMinutesInput"></a>

```typescript
public readonly latMinutesInput: number;
```

- *Type:* number

---

##### `latSecondsInput`<sup>Optional</sup> <a name="latSecondsInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latSecondsInput"></a>

```typescript
public readonly latSecondsInput: number;
```

- *Type:* number

---

##### `longDegreesInput`<sup>Optional</sup> <a name="longDegreesInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDegreesInput"></a>

```typescript
public readonly longDegreesInput: number;
```

- *Type:* number

---

##### `longDirectionInput`<sup>Optional</sup> <a name="longDirectionInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDirectionInput"></a>

```typescript
public readonly longDirectionInput: string;
```

- *Type:* string

---

##### `longMinutesInput`<sup>Optional</sup> <a name="longMinutesInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longMinutesInput"></a>

```typescript
public readonly longMinutesInput: number;
```

- *Type:* number

---

##### `longSecondsInput`<sup>Optional</sup> <a name="longSecondsInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longSecondsInput"></a>

```typescript
public readonly longSecondsInput: number;
```

- *Type:* number

---

##### `matchingTypeInput`<sup>Optional</sup> <a name="matchingTypeInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.matchingTypeInput"></a>

```typescript
public readonly matchingTypeInput: number;
```

- *Type:* number

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: number;
```

- *Type:* number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `precisionHorzInput`<sup>Optional</sup> <a name="precisionHorzInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionHorzInput"></a>

```typescript
public readonly precisionHorzInput: number;
```

- *Type:* number

---

##### `precisionVertInput`<sup>Optional</sup> <a name="precisionVertInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionVertInput"></a>

```typescript
public readonly precisionVertInput: number;
```

- *Type:* number

---

##### `preferenceInput`<sup>Optional</sup> <a name="preferenceInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.preferenceInput"></a>

```typescript
public readonly preferenceInput: number;
```

- *Type:* number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: number;
```

- *Type:* number

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.publicKeyInput"></a>

```typescript
public readonly publicKeyInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `replacementInput`<sup>Optional</sup> <a name="replacementInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.replacementInput"></a>

```typescript
public readonly replacementInput: string;
```

- *Type:* string

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.selectorInput"></a>

```typescript
public readonly selectorInput: number;
```

- *Type:* number

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: number;
```

- *Type:* number

---

##### `usageInput`<sup>Optional</sup> <a name="usageInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.usageInput"></a>

```typescript
public readonly usageInput: number;
```

- *Type:* number

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: number;
```

- *Type:* number

---

##### `altitude`<sup>Required</sup> <a name="altitude" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.altitude"></a>

```typescript
public readonly altitude: number;
```

- *Type:* number

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digest"></a>

```typescript
public readonly digest: string;
```

- *Type:* string

---

##### `digestType`<sup>Required</sup> <a name="digestType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestType"></a>

```typescript
public readonly digestType: number;
```

- *Type:* number

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.flags"></a>

```typescript
public readonly flags: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `keyTag`<sup>Required</sup> <a name="keyTag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.keyTag"></a>

```typescript
public readonly keyTag: number;
```

- *Type:* number

---

##### `latDegrees`<sup>Required</sup> <a name="latDegrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDegrees"></a>

```typescript
public readonly latDegrees: number;
```

- *Type:* number

---

##### `latDirection`<sup>Required</sup> <a name="latDirection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDirection"></a>

```typescript
public readonly latDirection: string;
```

- *Type:* string

---

##### `latMinutes`<sup>Required</sup> <a name="latMinutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latMinutes"></a>

```typescript
public readonly latMinutes: number;
```

- *Type:* number

---

##### `latSeconds`<sup>Required</sup> <a name="latSeconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latSeconds"></a>

```typescript
public readonly latSeconds: number;
```

- *Type:* number

---

##### `longDegrees`<sup>Required</sup> <a name="longDegrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDegrees"></a>

```typescript
public readonly longDegrees: number;
```

- *Type:* number

---

##### `longDirection`<sup>Required</sup> <a name="longDirection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDirection"></a>

```typescript
public readonly longDirection: string;
```

- *Type:* string

---

##### `longMinutes`<sup>Required</sup> <a name="longMinutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longMinutes"></a>

```typescript
public readonly longMinutes: number;
```

- *Type:* number

---

##### `longSeconds`<sup>Required</sup> <a name="longSeconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longSeconds"></a>

```typescript
public readonly longSeconds: number;
```

- *Type:* number

---

##### `matchingType`<sup>Required</sup> <a name="matchingType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.matchingType"></a>

```typescript
public readonly matchingType: number;
```

- *Type:* number

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `precisionHorz`<sup>Required</sup> <a name="precisionHorz" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionHorz"></a>

```typescript
public readonly precisionHorz: number;
```

- *Type:* number

---

##### `precisionVert`<sup>Required</sup> <a name="precisionVert" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionVert"></a>

```typescript
public readonly precisionVert: number;
```

- *Type:* number

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.preference"></a>

```typescript
public readonly preference: number;
```

- *Type:* number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.protocol"></a>

```typescript
public readonly protocol: number;
```

- *Type:* number

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `replacement`<sup>Required</sup> <a name="replacement" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.replacement"></a>

```typescript
public readonly replacement: string;
```

- *Type:* string

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.selector"></a>

```typescript
public readonly selector: number;
```

- *Type:* number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.usage"></a>

```typescript
public readonly usage: number;
```

- *Type:* number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DnsRecordData;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a>

---


### DnsRecordSettingsOutputReference <a name="DnsRecordSettingsOutputReference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.Initializer"></a>

```typescript
import { dnsRecord } from '@cdktf/provider-cloudflare'

new dnsRecord.DnsRecordSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetFlattenCname">resetFlattenCname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetIpv4Only">resetIpv4Only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetIpv6Only">resetIpv6Only</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFlattenCname` <a name="resetFlattenCname" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetFlattenCname"></a>

```typescript
public resetFlattenCname(): void
```

##### `resetIpv4Only` <a name="resetIpv4Only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetIpv4Only"></a>

```typescript
public resetIpv4Only(): void
```

##### `resetIpv6Only` <a name="resetIpv6Only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetIpv6Only"></a>

```typescript
public resetIpv6Only(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.flattenCnameInput">flattenCnameInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv4OnlyInput">ipv4OnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv6OnlyInput">ipv6OnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.flattenCname">flattenCname</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv4Only">ipv4Only</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv6Only">ipv6Only</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flattenCnameInput`<sup>Optional</sup> <a name="flattenCnameInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.flattenCnameInput"></a>

```typescript
public readonly flattenCnameInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipv4OnlyInput`<sup>Optional</sup> <a name="ipv4OnlyInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv4OnlyInput"></a>

```typescript
public readonly ipv4OnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipv6OnlyInput`<sup>Optional</sup> <a name="ipv6OnlyInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv6OnlyInput"></a>

```typescript
public readonly ipv6OnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `flattenCname`<sup>Required</sup> <a name="flattenCname" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.flattenCname"></a>

```typescript
public readonly flattenCname: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipv4Only`<sup>Required</sup> <a name="ipv4Only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv4Only"></a>

```typescript
public readonly ipv4Only: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipv6Only`<sup>Required</sup> <a name="ipv6Only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv6Only"></a>

```typescript
public readonly ipv6Only: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DnsRecordSettings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a>

---



